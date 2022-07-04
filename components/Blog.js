import Header from "./Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog({ posts, category, detailing }) {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden border-sm shadow rounded-md">
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

      <div>
        {category.map((categories) => (
          <button key={categories.id}>{categories.name}</button>
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
