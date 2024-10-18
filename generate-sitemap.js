require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { create } = require("xmlbuilder");
const contentful = require("contentful");

// Initialize Contentful client
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Get today's date in ISO format
const getDate = () => new Date().toISOString().split("T")[0];

// Function to create the blog sitemap XML
const createSitemap = (urls, filename) => {
  const sitemap = create("urlset", {
    version: "1.0",
    encoding: "UTF-8",
  }).att({
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation":
      "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd",
  });

  urls.forEach((url) => {
    const urlElement = sitemap.ele("url");
    urlElement
      .ele("loc", `https://blog.flowhashtagmedia.com/${url}`)
      .up()
      .ele("lastmod", getDate())
      .up();
  });

  const filepath = path.join(__dirname, "public", filename);
  fs.writeFileSync(filepath, sitemap.end({ pretty: true }));
};

// Fetch blog posts from Contentful
const fetchBlogPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost", // Replace this with the correct content type ID
    });

    // If no blog posts found, return an empty array
    if (!entries.items || entries.items.length === 0) {
      console.log("No blog posts found.");
      return [];
    }

    return entries.items.map((item) => `${item.fields.slug}/`);
  } catch (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }
};

// Retrieve available content types from Contentful to verify correct content type ID
const verifyContentType = async () => {
  try {
    const contentTypes = await client.getContentTypes();
    console.log("Available content types:");
    contentTypes.items.forEach((type) => {
      console.log(`ID: ${type.sys.id}, Name: ${type.name}`);
    });
  } catch (error) {
    console.error("Error fetching content types:", error.message);
  }
};

// Generate blog sitemap
const generateBlogSitemap = async () => {
  // Ensure the public directory exists
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Fetch blog posts and generate blog pages sitemap
  const blogPosts = await fetchBlogPosts();
  if (blogPosts.length > 0) {
    createSitemap(blogPosts, "blog-sitemap.xml");
    console.log("Blog sitemap generated successfully.");
  }
};

// Verify the content type and generate the sitemap
verifyContentType().then(() => {
  generateBlogSitemap();
});
