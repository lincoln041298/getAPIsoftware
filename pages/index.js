import Head from "next/head";
import Image from "next/image";
import Blog from "../components/Blog";
import Link from "next/link";
import { useRouter } from 'next/router'
import All from "./blog/All";

export default function Home({ posts, category, detailing }) {
  const router = useRouter()
  return (
    <div>
      <Head></Head>
        <main className="max-w-[1230px] mx-auto">
          <Blog posts={posts} category={category} ></Blog>
        </main>
      {/* <Link href="blog/All">Try to test</Link> */}
      <All detailing={detailing} ></All>
      {category.map((categories) => (
        <li key={categories.id}>
          <Link href="blog/[pid]" as={`/blog/${categories.slug}`} category={category} >
            <a>{categories.slug}</a>
          </Link>
        </li>
      ))}
      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const list = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1"
  );
  const categories = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories"
  );
  const detail = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=xay-dung-ung-dung-web-tien-bo-voi-kien-truc-jamstack"
  );
  const posts = await list.json();
  const category = await categories.json();
  const detailing = await detail.json();

  return {
    props: {
      posts,
      category,
      detailing,
    },
  };
}
