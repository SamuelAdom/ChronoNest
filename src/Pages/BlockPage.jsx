import React, { useEffect, useState } from "react";
import { blog } from "../assets/asset";
import CommentBox from "../Components/CommentBox";
import { useParams } from "react-router-dom";

const BlockPage = () => {
  const { ID } = useParams();
  const [content, setContent] = useState({});

  useEffect(() => {
    const getBlog = () => {
      setContent(blog.find((post) => post.id === Number(ID)));
    };
    if (ID) {
      getBlog();
    }
  }, [ID]);
  return (
    content && (
      <>
        <div
          className="bg-cover bg-center relative h-100 lg:h-screen md:h-140"
          style={{ backgroundImage: `url(${content.image})` }}
        >
          <div className="flex justify-center">
            <h1 className="text-3xl mt-50 text-center sm:text-6xl font-serif text-white md:mt-55">
              {content.description}
            </h1>
          </div>
        </div>
        <div className="flex flex-col  items-center mt-10 space-y-12">
          <p className="text-lg font-light p-5 sm:p-0 md:w-200 leading-7">
            {content.intro}
          </p>
          <div className="flex flex-col m-2 gap-5">
            <p className="text-2xl sm:text-3xl  font-serif">
              {content.heading}
            </p>
            <p className="text-md sm:text-[16px] leading-6 sm:w-150 font-light">{content.des}</p>
            <p className="text-2xl sm:text-3xl  font-serif">{content.sub}</p>
            <p className="text-md sm:text-[16px] leading-6 sm:w-150 font-light">{content.details}</p>
            <p className="text-2xl sm:text-3xl  font-serif">{content.features}</p>
            <p className="text-md sm:text-[16px] leading-6 sm:w-150 font-light">{content.points}</p>
            <p className="text-2xl sm:text-3xl  font-serif">{content.final}</p>
            <p className="text-md sm:text-[16px] leading-6 sm:w-150 font-light">{content.summary}</p>
            <hr/>

          </div>
          <CommentBox/>
        </div>
      </>
    )
  );
};

export default BlockPage;
