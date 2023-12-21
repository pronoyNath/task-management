import { useEffect, useState } from 'react';
import CreateTask from './CreateTask/CreateTask';
import ListTasks from './ListTasks/ListTasks';
import toast, { Toaster } from 'react-hot-toast';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    console.log("takkk", tasks);
    

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
        <>
            <Toaster />
            <div className='flex flex-col items-center justify-center gap-16'>
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
            </div>
        </>
    );
};

export default Tasks;