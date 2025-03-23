import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    id: number,
    title: string,
    isDone: boolean
}


export function App() {
    const tasks1: Task[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ]
    const tasks2: Task[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]

    return (
        <div className="app">
            <TodolistItem title="What to learn" tasks={tasks1} date="3spt"/>
            <TodolistItem title="Song" tasks={tasks2}/>

        </div>
    )
}


