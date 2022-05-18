//issue-1: form reset is not working
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Main = () => {
    const [users, setUsers] = useState([])
    const { register, handleSubmit, reset } = useForm();



    //data pick from database through node server
    useEffect(() => {
        fetch('https://intense-wildwood-66788.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])


    //collect data from form and send it to server then mongodb 
    const onSubmit = (data) => {

        console.log(data)

        fetch('https://intense-wildwood-66788.herokuapp.com/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newUser = [...users, result]
                setUsers(newUser)
                alert('data insert successfully')
                reset();
            })
    };



    // Delete items from UI and database
    const deleteHandler = (id) => {
        const proceed = window.confirm('Are you sure for Delete .........')
        if (proceed) {
            const url = `https://intense-wildwood-66788.herokuapp.com/task/${id}`
            console.log(url);
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                    console.log(data);
                })
        }
    }

    return (
        <div className='d-flex justify-content-center container mt-5'>
            <div className='h-100 w-25 mx-3'>
                <h3 className='text-center'>Add Task</h3>
                <form className='d-flex flex-column'
                    onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-2' placeholder='Name' type='text' {...register("name")} required />
                    <input className='my-2' placeholder='Task Details' type="text" {...register("task")} required />
                    <input type="submit"  />
                </form>
            </div>
            <div className='h-100 w-50'>
                <h3 className='text-center'>Assign Task List - {users.length}</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Task</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th scope="row">{users.indexOf(user) + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.task}</td>
                                    <td className='d-flex'>
                                        <button onClick={() => deleteHandler(user._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default Main;