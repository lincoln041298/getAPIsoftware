import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'

export default function Home({ posts, category, detailing }) {
  console.log(posts)
  console.log(category)
  return (
    <div>
      <Head>
  
      </Head>

      <main>
          <Blog posts={posts} category={category} detailing={detailing}></Blog>
      </main>

      <footer>
      
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const list = await fetch('https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1')
  const categories = await fetch('https://api.gcosoftware.vn/wp-json/wp/v2/categories')
  const detail = await fetch ('https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=xay-dung-ung-dung-web-tien-bo-voi-kien-truc-jamstack')
  const posts = await list.json()
  const category = await categories.json()
  const detailing = await detail.json()


  return {
    props: {
      posts,
      category,
      detailing
    },
  }
}
