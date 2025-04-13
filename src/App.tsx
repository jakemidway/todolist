import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type Task = {
    id: number,
    title: string,
    isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'


export function App() {

    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Typescript', isDone: false},
        {id: 5, title: 'RTK query', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValues>('all');

    const deleteTask = (taskId: number) => {
        const newTasks = tasks.filter((task) => {
            return task.id !== taskId;
        })
        setTasks(newTasks)
    }


    const changeFilter = (value: FilterValues) => {
        setFilter(value)
    }


    let filteredTasks: Task[] = tasks

    if (filter === "all") {
        filteredTasks = tasks
    }
    if (filter === "active") {
        filteredTasks = tasks.filter((task) => {
            return !task.isDone
        })
    }
    if (filter === "completed") {
        filteredTasks = tasks.filter((task) => {
            return task.isDone
        })
    }



    return (
        <div className="app">
            <TodolistItem title="What to learn"
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
                          date="3spt"/>
        </div>
    )
}


