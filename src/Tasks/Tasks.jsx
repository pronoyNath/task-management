import { useEffect, useState } from 'react';
import CreateTask from './CreateTask/CreateTask';
import ListTasks from './ListTasks/ListTasks';
import toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    // console.log("takkk", tasks);
    

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
        <>
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <h3 className='text-3xl text-center font-semibold mb-5'>Create Task Here</h3>
            <div className='flex flex-col items-center justify-center gap-16 p-3'>
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <h3 className='text-3xl font-semibold text-center'>Task Status</h3>
                <div className=''>

                <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
                </div>
            </div>
            </DndProvider>
        </>
    );
};

export default Tasks;