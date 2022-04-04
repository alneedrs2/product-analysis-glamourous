import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="mx-10 my-10 text-3xl">(১) প্রশ্ন : Context API কি?</h1>
        <p className="mx-10 my-10 text-xl">
          উত্তর : The React Context API হল একটি রিঅ্যাক্ট অ্যাপের জন্য
          কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যার দ্বারা সবদিকে
          ডাটা পাস করা যেতে পারে। এটি "prop drilling" বা grand parebt থেকে child
          অথবা parent এর কাছে props গুলোকে পাঠানোর বিকল্প পদ্ধতি। Redux ব্যবহার
          করে State management এর কাজ গুলোকে সহজ, সাবলীল করে দেয় এই React
          Context API।
        </p>
      </div>
      <div>
        <h1 className="mx-10 my-10 text-3xl">(২) প্রশ্ন : Semantic Tag কি?</h1>
        <p className="mx-10 mb-10 text-xl">
          উত্তর : Semantic tags হলো সেই সকল অর্থপূর্ণ ট্যাগ যেগুলো Content এর
          ধরণকে বুঝতে সাহায্য করে। উদাহরণস্বরুপ header, footer, table, …
          ইত্যাদি। HTML5 আমাদের এমন অনেক semantic ট্যাগ এর সাথে পরিচিত করায়
          যেগুলো আমাদের কোড বুঝার এবং লিখার কাজকে অনেক সহজ করেছে এবং ব্রাউজারকে
          নতুনত্ব দিয়েছে।
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Blogs;
