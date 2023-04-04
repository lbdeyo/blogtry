import Navbar from "@/components/NavBar";
import styles from "@/styles/Slug.module.css";
import {GraphQLClient, gql} from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clfss5u8327u401ue9gy9gh71/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      title
      content {
        html
      }
      updatedAt
      createdBy {
        id
      }
      author {
        id
      }
      coverPhoto {
        url
      }
      slug
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const {posts} = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({params: {slug: post.slug}})),
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
export default function BlogPost({post}) {
  return (
    <main className={styles.blog}>
      <Navbar />
      <img src={post.coverPhoto.url} alt="asd" className={styles.cover} />
      <div className={styles.title}>
        <div></div>
      </div>
      <h2 className={`${styles.title} text-xl6`}>{post.title}</h2>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{__html: post.content.html}}></div>
    </main>
  );
}
