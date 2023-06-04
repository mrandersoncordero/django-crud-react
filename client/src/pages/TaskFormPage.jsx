import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskFormPage() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
        } else {
            const res =  await createTask(data);
        }
        navigate('/tasks');
    });

    useEffect(() => {
       async function loadTask() {
            if(params.id) {
                const {data: {title, description}} = await getTask(params.id);
                setValue('title', title)
                setValue('description', description)
            }  
        }
        loadTask();
    }, []);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" 
                {...register("title", {required: true})}
                />
                {errors.title && <span>title field is required</span>}
                <textarea placeholder="Description"
                {...register("description", {required: true})}
                ></textarea>
                {errors.description && <span>description field is required</span>}

                <button>Save</button>
            </form>

            {params.id && <button onClick={async () => {
                const accepted = window.confirm('are you sure?');
                if (accepted) {
                    await deleteTask(params.id);
                    navigate('/tasks');
                }
            }}>Delete</button>}
        </div>

    )
}