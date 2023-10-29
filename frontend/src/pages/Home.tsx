import React from "react";
import Header from "../layouts/Header";
import "../css/home.css";
import TaskTotal from "../components/tasks/TaskTotal";
import Filter from "../components/tasks/Filter";
import TaskItem from "../components/tasks/TaskItem";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <TaskTotal />
      <Filter />
      <TaskItem />
    </div>
  );
};

export default Home;
