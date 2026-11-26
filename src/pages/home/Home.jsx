import { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Home.css';
import Header from "../../components/Header.jsx";
import Menu from "../../components/Menu.jsx";
import FoodDisplay from "../../components/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) return;

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.state]);

  return (
    <div className="home-page" id="home">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
