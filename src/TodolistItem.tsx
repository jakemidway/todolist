import {Button} from "./Button.tsx";
import {FilterValues, Task} from "./App.tsx";

type PropsType = {
    title: string,
    tasks: Task[],
    deleteTask: (taskId: number) => void,
    changeFilter: (value: FilterValues) => void,
    date?: string
}

export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter}: PropsType) => {
    const taskItems = tasks.map(task => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title={'x'} onClick={() => deleteTask(task.id)}/>
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
                <Button title={"All"} onClick={() => changeFilter('all')} />
                <Button title={"Active"} onClick={() => changeFilter('active')} />
                <Button title={"Completed"} onClick={() => changeFilter('completed')} />
            </div>
            <div>{date}</div>
        </div>
    );
};

