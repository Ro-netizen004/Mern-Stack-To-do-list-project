import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";
import LoadingState from "./LoadingState";
import NoteCard from "../components/NoteCard";
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTasks = async () => {
      try{
        const response = await fetch("http://localhost:2000/api/tasks");
        const data = await response.json();
        setIsRateLimited(false);
        console.log(data);
        setTasks(data);
    }
      catch(error){
        console.log("Error fetching tasks: ",error);
        if(error.response.status === 429){
          setIsRateLimited(true);
        }
        else{
          toast.error("Failed to fetch tasks");
        }
      }
      finally{
        setLoading(false);
      }
    }
    fetchTasks();
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-10 pt-6">
        {loading && <LoadingState/>}
        {isRateLimited && <RateLimitedUI/>}
        {tasks.length>0 && !isRateLimited && <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
              tasks.map((task) => (
                <NoteCard key = {task._id} task = {task}/>
              ))
          }
        </div>}
      </main>
    </div>
  )
}

export default HomePage

  