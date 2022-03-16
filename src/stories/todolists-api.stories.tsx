import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

//получить тудулисты
export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}



//создать тудулист
export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        todolistAPI.createTodoList('TD-NEW')
            .then( (res) => {
            setState(res.data);
        } )


    }, [])

    return <div> {JSON.stringify(state)}</div>
}



//удалить тудулист
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'bba4631d-6df3-4559-9e4d-cda73e85049d'

        todolistAPI.deleteTodoList(todolistId)
            .then( (res) => {
            setState(res.data);
        })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}


//обновить тудулист
export const UpdateTodolistTitle = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'f7231497-0c66-4d05-b9e5-989b88839dca'
        const title = 'REACT-NEW'

        todolistAPI.updateTodoList(todolistId, title)
            .then((res) => {
                setState(res.data)
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}

//получить таски
export const GetTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'aa22046a-351a-4454-ae12-4068b682c06d'

        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

//создать таску
export const CreateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'aa22046a-351a-4454-ae12-4068b682c06d'
        const title = 'Task'

        todolistAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

//удалить таску
export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'aa22046a-351a-4454-ae12-4068b682c06d'
        const taskId = '98e9693c-bcb3-48bc-a29b-6463b30e9e97'

        todolistAPI.deleteTask(todolistId, taskId)
            .then( (res) => {
                setState(res.data);
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}

//обновить таску
export const UpdateTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistId = 'aa22046a-351a-4454-ae12-4068b682c06d'
        const title = 'REACT-NEW-TASK'
        const taskId = '1a58b5b1-089b-4358-a843-56128575b056'

        todolistAPI.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
