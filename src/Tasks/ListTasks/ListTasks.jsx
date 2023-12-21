import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import toast from 'react-hot-toast';
import { FaCircleXmark, FaMarker } from "react-icons/fa6";

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

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "To-do";
    let bg = "bg-slate-500"
    let tasksToMap = todos

    if (status === 'ongoing') {
        text = 'On Going'
        bg = "bg-purple-500"
        tasksToMap = onGoing
    }
    if (status === 'complete') {
        text = 'Completed'
        bg = "bg-green-500"
        tasksToMap = complete
    }

    const addItemToSection = (id) => {
        setTasks(prev => {
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    return { ...t, status: status }
                }
                return t;
            })

            localStorage.setItem("tasks", JSON.stringify(mTasks))
            toast("Task Status Changed", { icon: "😲" })
            return mTasks;
        })
    }

    return (<div className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ""}`} ref={drop}>
        <Header text={text} bg={bg} count={tasksToMap.length} />
        {tasksToMap.length > 0 && tasksToMap.map(task => <Task
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
        ></Task>)}
    </div>)
}
const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center justify-center h-12  rounded-md uppercase text-sm text-white`}>
            {text}
            <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>
                {count}
            </div>
        </div>
    )
}
const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    // console.log(isDragging);

    const handleRemove = (id) => {
        const fTasks = tasks.filter(t => t.id !== id)
        localStorage.setItem("tasks", JSON.stringify(fTasks));

        setTasks(fTasks)
        toast("Task Removed", { icon: "☠️" })
    }

    return (<div ref={drag} className={`relative ${isDragging ? "opacity-25" : "opacity-100"} p-4 mt-8 shadow-xl border cursor-grab`}>
        <p><span className='font-semibold'>Title: </span> {task.name}</p>
        <p><span className='font-semibold'>Description: </span> {task.description}</p>
        <p><span className='font-semibold'>Deadline: </span> {task.deadline}</p>
        <p><span className='font-semibold'>Priority: </span> {task.priority}</p>
        <div className='flex gap-4 absolute top-1 right-1 text-slate-400'>
            
        <button onClick={() => handleRemove(task.id)}><FaMarker /></button>
        <button onClick={() => handleRemove(task.id)} ><FaCircleXmark /></button>
        </div>
    </div>)
}