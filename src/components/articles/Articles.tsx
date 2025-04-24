import React from "react";

interface IArticles {
  title: string;
  subtitle: string;
  list: string[];
  type: string;
}

const Articles = ({ title, subtitle, list }: IArticles) => {
  return (
    <section className="text-center md:mx-25 lg:mx-40 my-2 px-0.5">
      <h2 className="text-lg bg-[#5d3ea8] text-white rounded-t-md ">{title}</h2>
      <article className={`p-2 border rounded-b-md `}>
        <h3 className="font-bold">{subtitle}:</h3>
        {list && list.map((item, index) => <p key={index}>{item}</p>)}
      </article>
    </section>
  );
};

export default Articles;
