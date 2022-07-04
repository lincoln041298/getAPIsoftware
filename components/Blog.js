import Header from "./Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import Animatioimg from "../public/animation.svg"

export default function Blog({ posts, category, detailing }) {
  return (
    <>
      <Header></Header>
      <section className="grid grid-cols-5">
        <div className="col-span-2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-[15px]">BLOG</h1>
          <p>
            Chúng tôi muốn chia sẻ cái nhìn sâu sắc và kinh nghiệm của mình để
            giúp bạn tìm hiểu thêm về các chuyển đổi kỹ thuật số tuyệt vời. Để
            có thông tin, ý tưởng và thông điệp mạnh mẽ, hãy đọc các bài đăng
            trên blog của chúng tôi.
          </p>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <p className="max-w-md">
          <Image src={Animatioimg} alt="animation image"></Image>
          </p>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-5">
      <div className="col-span-3">
        <div className="flex">
        {category.map((categories) => (
          <div key={categories.id} className="flex flex-col items-center justify-center ml-2">
            <button className="button-blog p-3">{categories.name}</button>
            <p className="button-blog-line"></p>
          </div>
        ))}
        </div>
       
      </div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden border-sm shadow rounded-md"
          >
            <p>
              <img
                alt="image block"
                className="block w-full h-[320px] object-cover"
                src={post.acf.avtq}
              ></img>
            </p>
            <div className="p-[15px] cursor-pointer">
              <p>{post.title.rendered}</p>
            </div>
          </div>
        ))}
      </div>

     
      {/* <div>
        {detailing.map((detail) => (
          <div key={detail.id}>{detail.id}</div>
        ))}
      </div> */}
    </>
  );
}
