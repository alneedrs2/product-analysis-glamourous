import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import AllReview from "../AllReview/AllReview";
import "./Home.css";

const Home = () => {
  const [review, setReview] = useReview();
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 mt-10 mx-10 pt-10 px-10 home-color">
        <div className="mt-10">
          <h1 className="text-4xl text-red-500">ALL ABOUT GLAMOURS</h1>
          <p className="py-5">
            <span className="text-2xl text-red-500">Glamorous</span> is the
            largest retail chain cosmetics shop in Bangladesh and proud to
            introduce genuine and world class brand cosmetics, imported directly
            from the USA, Canada, Germany, England and China. We guarantee of
            our product's authenticity and cover all kind of warranties, which
            makes BanglaShoppers.com the best cosmetics store in Bangladesh and
            make your online shopping experience great in BD (Bangladesh)..
            Enjoy true upscale shopping experience at in-stores or online and
            receive exclusive 7 days money back guarantee..
          </p>
          <button className="my-5 py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            height={150}
            width={500}
          />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-4xl text-center">Product Reviews</h1>
        {review.slice(0, 3).map((item) => (
          <AllReview key={item.id} item={item}></AllReview>
        ))}
        <Link to={'/reviews'} className="my-5 ml-10 py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-75">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Home;
