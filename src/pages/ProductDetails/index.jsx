import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductZoom from "../../components/ProductZoom";

const ProductDetails = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5 ">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[30%] h-[60vh] overflow-hidden">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%]">
            <h1 className="text-[22px] font-[600] mb-2">Chikankari Woven Kurta</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brand : <span className="font-[500] text-black opacity-75">House of ChikanKari</span>
              </span>
              <Rating name="size-small" defaultValue={4} size="small" readOnly />
              <span className="text-[13px] cursor-pointer">Review  (5)</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font[500]">
                $58.00
              </span>
              <span className="price text-primary text-[18px] font-[600]"> 
                $58.00
              </span>

              <span className="text-[14px]">Available In Stock : <span className="text-green-600 text-[14px] font-bold">147 Items</span></span>
            </div>

            <br />

            <p className="mt-3 pr-10 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit modi rem earum a accusamus commodi voluptate nihil, nam obcaecati ullam veritatis quae nemo natus corporis iure delectus repellat, ipsam saepe. Esse eos molestiae alias. A ullam possimus sint nesciunt qui quos similique molestiae dolorem recusandae quod, eveniet adipisci eaque blanditiis, deleniti expedita ab velit nisi, veritatis porro et? Dolore, non.</p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
