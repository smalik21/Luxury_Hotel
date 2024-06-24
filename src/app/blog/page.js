import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/blog/BlogCard";
import Category from "@/components/blog/Category";
import Hero from "@/components/blog/HeroSection";
import NewsLetter from "@/components/blog/NewsLetter";
import Search from "@/components/blog/Search";
import React from "react";

const page = () => {
  const data1 = [
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y1.png",
    },
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y2.png",
    },
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y3.png",
    },
  ];

  const data2 = [
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y4.png",
    },
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y5.png",
    },
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y6.png",
    },
  ];
  return (
    <div>
      <Header />
      <Hero />
      <Search />
       <div className="flex flex-col gap-5 mt-10">
       {
           data1.map((data,i)=>{
               return <BlogCard key={i} data={data}/>
           })
      }
       </div>
       <NewsLetter/>
       <div className="flex flex-col gap-5 mt-10">
       {
           data2.map((data,i)=>{
               return <BlogCard key={i} data={data}/>
           })
      }
       </div>
       <Category/>
       <Footer/>
    </div>
  );
};

export default page;
