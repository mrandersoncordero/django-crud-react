import { useEffect, useState } from "react";
import { getAllTakes } from '../api/tasks.api';
import { TaskCard } from './TaskCard'
export function TaskList() {

    const [tasks, setTasks] = useState([]); 

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTakes();
            setTasks(res.data);
        }
        loadTasks();

    }, []);

    return <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>;
    
}