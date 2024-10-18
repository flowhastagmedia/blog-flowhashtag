import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogArea from "@/components/blog/BlogArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { gql } from "@apollo/client";
import client from "@/utils/apolloClient";

// GraphQL query for fetching blog posts
const allBlogData = gql`
  query {
    blogPostCollection {
      items {
        title
        slug
        summary
        image {
          url
        }
      }
    }
  }
`;

// Async function directly inside your page component
export default async function Home() {
  const { data } = await client.query({
    query: allBlogData,
    fetchPolicy: "no-cache", // Ensures fresh data from the server every time
  });

  const blogData = data?.blogPostCollection?.items || [];

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea blog_data={blogData} />
            {/* <AboutHomeFour /> */}
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
