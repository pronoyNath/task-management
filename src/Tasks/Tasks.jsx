import { useEffect, useState } from 'react';
import CreateTask from './CreateTask/CreateTask';
import ListTasks from './ListTasks/ListTasks';
import toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    console.log("takkk", tasks);
    

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
        <>
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <div className='flex flex-col items-center justify-center gap-16 p-3'>
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
            </div>
            </DndProvider>
        </>
    );
};

export default Tasks;