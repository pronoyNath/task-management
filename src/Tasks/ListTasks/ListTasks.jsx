import React, { useEffect, useState } from 'react';
import { FaCircleXmark } from "react-icons/fa6";

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([])
    const [onGoing, setOngoing] = useState([])
    const [complete, setComplete] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo')
        const fOnGoing = tasks.filter(task => task.status === 'ongoing')
        const fComplete = tasks.filter(task => task.status === 'complete')

        setTodos(fTodos)
        setOngoing(fOnGoing)
        setComplete(fComplete)
    }, [tasks])

    const statuses = ["todo", "ongoing", "complete"]

    return (
        <div className='flex gap-16'>
            {statuses.map((status, index) => <Section key={index}
                status={status}
                tasks={tasks}
                setTasks={setTasks}
                todos={todos}
                onGoing={onGoing}
                complete={complete}
            ></Section>)}
        </div>
    );
};

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, onGoing, complete }) => {
    let text = "Todo";
    let bg = "bg-slate-500"
    let tasksToMap = todos

    if(status === 'ongoing'){
        text = 'In Progress'
        bg = "bg-purple-500"
        tasksToMap = onGoing
    }
    if(status === 'complete'){
        text = 'Complete'
        bg = "bg-green-500"
        tasksToMap = complete
    }


    return (<div className='w-64'>
        <Header text={text} bg={bg} count={tasksToMap.length}/> 
        {tasksToMap.length > 0 && tasksToMap.map(task=><Task 
        key={task.id}
        task={task}
        tasks = {tasks}
        setTasks={setTasks}
        ></Task>)}
    </div>)
}
const Header = ({ text,bg,count}) => {
    return (<div className={`${bg} flex items-center h-12 pt-4 rounded-md uppercase text-sm text-white`}>
        {text} <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div>
    </div>)
}
const Task = ({task,tasks, setTasks}) => {

    const handleRemove = (id)=>{
        console.log(id);
    }

    return (<div className={`relative p-4 mt-8 shadow-md cursor-grab`}>
        <p>{task.name}</p>
        <button onClick={()=>handleRemove(task.id)} className='absolute bottom-1 right-1 text-slate-400'><FaCircleXmark /></button>
    </div>)
}