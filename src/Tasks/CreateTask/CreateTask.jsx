import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../../Provider/AuthProvider";

const CreateTask = ({ tasks, setTasks }) => {
const {user} = useContext(AuthContext);


    const [task, setTask] = useState({
        id: '',
        name: '',
        priority: "low",
        status: 'todo',
    })

    // console.log("taskkkk",task);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) {
            return toast.error("A task must have more than 3 characters")
        }
        if (task.name.length > 100) {
            return toast.error("A task must have less than 100 characters")
        }

        setTasks((prev) => {
            const list = [...prev, task]
            localStorage.setItem("tasks", JSON.stringify(list))
            return list
        })

        toast.success("Task Created")
        setTask({
            id: "",
            name: "",
            description: "",
            deadline: "",
            priority: "low",
            status: "todo",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <div className="flex flex-col">
                    <label>Title</label>
                    <input type="text"
                        value={task.name}
                        placeholder="Title"
                        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
                        onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value, })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label>Description</label>
                    <input type="text"
                        value={task.description}
                        placeholder="Description"
                        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
                        onChange={(e) => setTask({ ...task, description:e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label>Deadline</label>
                    <input type="date"
                        value={task.deadline}
                        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
                        onChange={(e) => setTask({ ...task, deadline: e.target.value,email:user?.email })}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label>Priority</label>
                    <select onChange={(e) => setTask({ ...task,priority: e.target.value })} className="select border-2 border-slate-400" value={task.priority} defaultValue="low" name="priority" id="">
                        <option  value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>



            <button className="bg-cyan-300 rounded-md px-4 h-12 my-10 w-full text-white">Create</button>
        </form>
    );
};

export default CreateTask;