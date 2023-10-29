import { useEffect } from "react";
import Header from "../layouts/Header";
import "../css/home.css";
import TaskTotal from "../components/tasks/TaskTotal";
import Filter from "../components/tasks/Filter";
import TaskItem from "../components/tasks/TaskItem";
import { useTasks } from "../hooks/useTasks";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const tasks = useTasks();
  const auth = useAuth();

  useEffect(() => {}, []);

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
