import { useEffect } from "react";
import Header from "../layouts/Header";
import "../css/home.css";
import TaskTotal from "../components/tasks/TaskTotal";
import Filter from "../components/tasks/Filter";
import { useTasks } from "../hooks/useTasks";
import Tasks from "../components/tasks/Tasks";
import Loader from "../components/Loader";
import TaskForm from "../components/tasks/TaskForm";

const Home = () => {
  const tasks = useTasks();

  const fetchTasks = async () => {
    await tasks?.getUserTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <TaskTotal />
      <Filter />
      {tasks?.loading ? (
        <div className="load-container">
          <Loader size="md" />
        </div>
      ) : (
        <div className="tasks-area">
          <Tasks tasks={tasks?.tasks ? tasks.tasks : []} />
          <TaskForm />
        </div>
      )}
    </div>
  );
};

export default Home;
