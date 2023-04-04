import Head from "next/head";

// import Image from "next/image";
// import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {GraphQLClient, gql} from "graphql-request";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/NavBar";
import Script from "next/script";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clfss5u8327u401ue9gy9gh71/master"
);

const QUERY = gql`
  {
    posts {
      title
      id
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

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({posts}) {
  return (
    <div className="bg-zinc-750">
      <Script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js" />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className="grid"
        data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 400 }'>
        {posts.map((post) => (
          <div key={post.id}>
            <BlogCard
              title={post.title}
              content={post.content}
              author={post.author}
              coverPoster={post.coverPhoto}
              slug={post.slug}
              datePublished={post.slug}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
