import {Button} from "./Button.tsx";

type PropsType = {
    title: string,
    tasks: TaskType[],
    date?: string
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const TodolistItem = ({title, tasks, date}: PropsType) => {
    // const title = props.title
    // const tasks = props.tasks

    // const {title: title, tasks: tasks} = props

    // const {title, tasks} = props

    const taskItems = tasks.map(task => {
            console.log(task)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => {alert(task.id)}}>x</button>
                </li>
            )
        })


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+' />
            </div>
            {tasks.length === 0 ? (
                <p>No tasks were found.</p>
            ) : (
                <ul>
                    {taskItems}
                </ul>
            )}
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>
            </div>
            <div>{date}</div>
        </div>
    );
};

