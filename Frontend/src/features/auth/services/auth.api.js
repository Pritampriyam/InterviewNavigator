import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://interviewnavigatorbackend.onrender.com",
    withCredentials: true
})

export async function register({ username, email, password }) {
    console.log("[Auth API] register called", { username, email })
    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })
        console.log("[Auth API] register success", response.data)
        return response.data
    } catch (err) {
        console.error("[Auth API] register error", err)
        throw err
    }
}

export async function login({ email, password }) {
    console.log("[Auth API] login called", { email })
    try {
        const response = await api.post("/api/auth/login", {
            email, password
        })
        console.log("[Auth API] login success", response.data)
        return response.data
    } catch (err) {
        console.error("[Auth API] login error", err)
        throw err
    }
}

export async function logout() {
    console.log("[Auth API] logout called")
    try {
        const response = await api.get("/api/auth/logout")
        console.log("[Auth API] logout success", response.data)
        return response.data
    } catch (err) {
        console.error("[Auth API] logout error", err)
        throw err
    }
}

export async function getMe() {
    console.log("[Auth API] getMe called")
    try {
        const response = await api.get("/api/auth/get-me")
        console.log("[Auth API] getMe success", response.data)
        return response.data
    } catch (err) {
        console.error("[Auth API] getMe error", err)
        throw err
    }
}