import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem.tsx";
import {Test2} from "./Test.tsx";





export function App() {




    const tasks1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Typescript', isDone: false},
        {id: 5, title: 'RTK query', isDone: false},
    ]

    const tasks2 = []





    return (
        <div className="app">
            <TodolistItem title="What to learn" tasks={tasks1} date="3spt"/>
            <TodolistItem title="Song" tasks={tasks2}/>

            <Test2 />
        </div>
    )
}


