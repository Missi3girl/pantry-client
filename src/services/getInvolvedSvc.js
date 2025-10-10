// imports the server api browser url 
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4001/api";

async function submitGetInvolved(formData) {
    try { // sending POST req to server to send new json data
        const response = await fetch(`${API_BASE}/getInvolved`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) // object turned into json string so server understands
        });

        const data = await response.json(); // parses data and looks for errors

        // error handling coinsides with server side so app doesn't keep running 
        if (!response.ok) {
            throw new Error("Failed to submit form");
        }

        return data; //returns the response

    } catch (err) {
        console.error("submitGetInvolved error:", err);
        throw err; // resends error so the component using this fx can also handle it
    }
}

export { submitGetInvolved };