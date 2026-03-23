import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading, error, setError } = context


    const handleLogin = async ({ email, password }) => {
        setError(null)

        console.log("[useAuth] handleLogin start", { email })
        setLoading(true)
        try {
            const data = await login({ email, password })
            console.log("[useAuth] handleLogin success", data)
            setUser(data.user)
            return data   // ✅ FIX
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Login failed"
            setError(message)
            console.error("[useAuth] handleLogin failed", message, err)
            return null   // ✅ FIX
        } finally {
            setLoading(false)
            console.log("[useAuth] handleLogin finished")
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setError(null)
        console.log("[useAuth] handleRegister start", { username, email })
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            console.log("[useAuth] handleRegister success", data)
            setUser(data.user)
            return data
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Register failed"
            setError(message)
            console.error("[useAuth] handleRegister failed", message, err)
            return null
        } finally {
            setLoading(false)
            console.log("[useAuth] handleRegister finished")
        }
    }

    const handleLogout = async () => {
        setError(null)
        console.log("[useAuth] handleLogout start")
        setLoading(true)
        try {
            const data = await logout()
            console.log("[useAuth] handleLogout success", data)
            setUser(null)
            return data
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Logout failed"
            setError(message)
            console.error("[useAuth] handleLogout failed", message, err)
            return null
        } finally {
            setLoading(false)
            console.log("[useAuth] handleLogout finished")
        }
    }

    useEffect(() => {
        console.log("[useAuth] fetch authenticated user started")
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                console.log("[useAuth] getMe returned", data)
                setUser(data.user)
            } catch (err) {
                console.error("[useAuth] getMe failed", err)
            } finally {
                setLoading(false)
                console.log("[useAuth] fetch authenticated user finished")
            }
        }
        getAndSetUser()
    }, [])

    return { user, loading, error, handleRegister, handleLogin, handleLogout }
}