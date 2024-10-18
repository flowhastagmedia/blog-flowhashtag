import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogDetails from "@/components/details/BlogDetails";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { gql } from "@apollo/client";
import client from "@/utils/apolloClient";
import { notFound } from "next/navigation";
export const runtime = "edge";

// Define the type for the blog data
interface BlogData {
  title: string;
  slug: string;
  summary: string;
  sys: {
    firstPublishedAt: string;
    id: string;
  };
  image: {
    url: string;
  };
  body: {
    json: any;
    links: {
      assets: {
        block: {
          url: string;
        }[];
      };
    };
  };
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Metadata generation function
export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = params;

  const blogPost = gql`
    query getBlogPostBySlug($slug: String) {
      blogPostCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          summary
          image {
            url
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: blogPost,
    variables: { slug },
  });

  const blogData: BlogData | null = data.blogPostCollection.items[0] || null;

  if (!blogData) {
    return {
      title: "Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: blogData.title,
    description: blogData.summary,
    openGraph: {
      title: blogData.title,
      description: blogData.summary,
      images: [blogData?.image?.url],
      url: `https://blog.flowhashtagmedia.com/${slug}/`, // Update with your site's URL
    },
    metadataBase: new URL("https://blog.flowhashtagmedia.com/"),
    alternates: {
      canonical: `/${slug}/`,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  const blogPost = gql`
    query getBlogPostBySlug($slug: String) {
      blogPostCollection(where: { slug: $slug }, limit: 10) {
        items {
          title
          slug
          summary
          sys {
            firstPublishedAt
            id
          }
          image {
            url
          }
          body {
            json
            links {
              assets {
                block {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: blogPost,
    variables: { slug },
  });

  const blogData: BlogData | null = data.blogPostCollection.items[0] || null;

  if (!blogData) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetails blogData={blogData} />
            {/* <AboutHomeFour /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
