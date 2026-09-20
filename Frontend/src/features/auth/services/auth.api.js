
import axios from "axios";

const apiBaseUrl = (
    import.meta.env.VITE_API_BASE_URL || "https://airesume-05fz.onrender.com"
).replace(/\/$/, "");

const api = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

function getApiErrorMessage(error) {
    return error.response?.data?.message || error.message || "Request failed";
}

export async function register({ username, email, password }) {
    try {
        const response = await api.post("/api/auth/register", {
            username,
            email,
            password,
        });

        return response.data;
    } catch (err) {
        console.error("Register API Error:", getApiErrorMessage(err));

        throw err;
    }
}

export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password,
        });

        return response.data;
    } catch (err) {
        console.error("Login API Error:", getApiErrorMessage(err));

        throw err;
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout");

        return response.data;
    } catch (err) {
        console.error("Logout API Error:", getApiErrorMessage(err));

        throw err;
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me");

        return response.data;
    } catch (err) {
        console.error("Get Me API Error:", getApiErrorMessage(err));

        throw err;
    }
}

