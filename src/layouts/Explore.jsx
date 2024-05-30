import React, { useState } from "react";

import { IoMdHeart } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import "./Explore.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import Card from "../components/Card";

const Explore = () => {
  const [productList, setProductList] = useState([
    {
      id: 1,
      url: "/products/tshirt",
      src: "/assets/images/t-shirt.jpg",
      alt: "t-shirt",
      title: "Black T-Shirt",
      description: "Description",
      price: 250,
      add: <GoPlus />,
      favourite: true,
    },

    {
      id: 2,
      url: "/products/jeans",
      src: "/assets/images/jeans.jpg",
      alt: "jeans",
      title: "Blue jeans",
      description: "Description",
      price: 115,
      add: <GoPlus />,
      favourite: false,
    },

    {
      id: 3,
      url: "/products/shoes",
      src: "/assets/images/shoes.jpg",
      alt: "shoes",
      title: "Orange Shoes",
      description: "Description",
      price: 125,
      add: <GoPlus />,
      favourite: false,
    },
  ]);

  return (
    <div className="explore-container">
      <h2> Explore </h2>
      <div className="slider-section">
      <Swiper
          className="cards-slider"
          loop={true}
          spaceBetween={0}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {productList.map((product) => (
            <SwiperSlide className="cards-slide" key={product.id}>
              <Card
                url={product.url}
                src={product.src}
                alt={product.alt}
                title={product.title}
                description={product.description}
                price={product.price}
                add={product.add}
                favourite={
                  product.favourite && (
                    <div className="favourite">
                      <IoMdHeart />
                    </div>
                  )
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Explore;