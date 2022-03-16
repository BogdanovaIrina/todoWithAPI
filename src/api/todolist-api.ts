import axios from "axios";

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY":"e79ed137-e204-412f-b820-169b0d809599"
    }
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type GetTaskResponse = {
    error: string | null
    totalCount: number
    items : Array<TaskType>
}

export const todolistAPI = {

    getTodolists () {

        return instance.get<Array<TodolistType>>("todo-lists")

    },
    createTodoList (title:string) {

        return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", { title })

    },
    deleteTodoList (todolistId:string) {

        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)

    },
    updateTodoList (todolistId:string, title:string) {

        return instance.put<ResponseType>(`todo-lists/${todolistId}`, { title })

    },
    getTasks (todolistId:string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
    },
    createTask (todolistId:string, title:string) {

        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, { title })

    },
    deleteTask (todolistId:string, taskId:string) {

        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)

    },
    updateTask (todolistId:string, taskId:string, title:string) {

        return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, { title })

    }
}