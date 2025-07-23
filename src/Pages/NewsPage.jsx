import React from "react";
import { blog } from "../assets/asset";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-7 space-y-3">
        <h1 className="text-5xl font-serif ">News</h1>
       <p className="text-lg font-mono text-yellow-600 flex gap-4 flex-wrap">

  <Link to="/news" className="hover:underline cursor-pointer text-sm sm:text-lg">BLOG</Link> |
  <Link to="/bracelet" className="hover:underline cursor-pointer text-sm sm:text-lg">BRACELETS</Link> |
  <Link to="/sunglasses" className="hover:underline cursor-pointer text-sm sm:text-lg">SUNGLASSES</Link> |
  <Link to="/watch" className="hover:underline cursor-pointer text-sm sm:text-lg">WATCHES</Link>
</p>
      </div>
      <div>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 m-7 ">
          {blog.map((item) => (
            <li key={item.id} className="border-1 p-4">
              <div className="w-full h-60 sm:h-52 md:h-56">
                <img
                  src={item.image}
                  className="w-full h-full object-cover object-center shadow-md"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <p className="text-yellow-600">{item.category}</p>
                <h1 className="text-3xl font-serif">{item.description}</h1>
                <div className="mt-2">
                  <Link
                    to={`/blog/${item.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <button className="bg-transparent text-black border-2 border-black px-5 py-2 hover:border-3 cursor-pointer">
                      READ MORE
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewsPage;
