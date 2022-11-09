import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Kitob1 } from "./Kitob1";
import style from "./Carousel.module.css";
import { Kitob2 } from "./Kitob2";
import { Kitob3 } from "./kitob3";
import { Kitob4 } from "./kitob4";
import AOS from "aos";
import "aos/dist/aos.css";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "antd";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import axios from "axios";
export const Carousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className={style.Navbar}>
        <h1 data-aos="fade-up" data-aos-duration="1000">Горячие поступления </h1>
        <div className={style.Navlink}>
          <NavLink to="/">Women's clothing</NavLink>
          <NavLink to="men_clothing">Men`s clothing</NavLink>
          <NavLink to="jewelery">Jewelery</NavLink>
          <NavLink to="electronics">Electronics</NavLink>
        </div>
      </div>
      <Carousel2 />
    </div>
  );
};
export const Carousel2 = () => {
  const [data, setData] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [man, setMan] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        setData(response.data)
      })
  }, [setData]);
  const a = data.map(d => {
    console.log(d);
    if(d.category=='jewelery'){
      // console.log('jewelery');
      setJewelery(d.category)
    }else{
      console.log(d.category);
    }
  })
  console.log(jewelery);

  return (
    <div>
      <Routes>
        {" "}
        <Route
          path={"/"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob1 />
            </Suspense>
          }
        />
        <Route
          path={"men_clothing"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob1 />
            </Suspense>
          }
        />
        <Route
          path={"jewelery"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob1 />
            </Suspense>
          }
        />
        <Route
          path={"electronics"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob1 />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
