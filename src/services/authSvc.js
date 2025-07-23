const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

async function registerUser(newUser) {
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to register user");
        }

        return data;

    } catch (err) {
        console.error("registerUser error:", err);
        throw err;
    }
};

async function loginUser(userData) {
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
    
        if (!response.ok) {
            throw new Error(data.message || "Failed to login user");
        }
        
        return data;

    } catch (err) {
        console.error("loginUser error:", err);
        throw err
    }
}



export { registerUser, loginUser };