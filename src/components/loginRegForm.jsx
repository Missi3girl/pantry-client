import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/authSvc';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    InputLabel,
    Button,
    Paper,
    Snackbar,
    Alert,
    Typography
} from '@mui/material';

export default function loginRegForm() {
    const [mode, setMode] = useState("login");

    const [form, setForm] = useState({
        fullName: "",
        zipCode: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const validate = () => {

        // ! full name variable to ensure first and last name?

        const newErrors = {};
        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";

        if (mode === "register") {
            if (!form.fullName) newErrors.fullName = "Please enter your full name";
            if (!form.zipCode) newErrors.zipCode = "Zip Code required";
            if (!form.email) newErrors.email = "Email address required";
            if (!form.password) newErrors.password = "Please enter "
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleAuthModeChange = (e) => {
        setMode(e.target.value);
        setForm({
            fullName: "",
            zipCode: "",
            email: "",
            password: ""
        });
        setErrors({});
        setErrorOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }

        try {
            let response;
            if (mode === "register") {
                response = await registerUser(form);
            } else {
                response = await loginUser({ email: form.email, password: form.password });
            }

            setSuccessOpen(true);
            setErrorMessage("");
            setErrorOpen(false);

            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));

            if (response.user.isAdmin) {
                navigate("/admin/dashboard");
            } else {
                navigate("/user/dashboard");
            }

            setForm({
                fullName: "",
                zipCode: "",
                email: "",
                password: ""
            });

        } catch (err) {
            setErrorMessage(err.message);
            setErrorOpen(true);
            setSuccessOpen(false);
            console.error("Authentication error:", err);
        }
    };

    return (
        
    )
}