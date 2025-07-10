import { useState } from 'react';
import { submitGetInvolved } from '../../services/getInvolvedSvc';
import './FormGetInvolved.css';
import { Container, Box, TextField, Select, MenuItem, FormControl, InputLabel, Button, Paper  } from '@mui/material';

// a list of reasons for the dropdown (select) in the form
const reasons = ["I need help", "I want to volunteer", "Suggest new pantry", "Update current pantry", "Other"];

export default function FormGetInvolved() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        reason: "" // a dropdown menu
    });

    const [errors, setErrors] = useState({});

    // field validation ensures that the required fields are filled out before submitting
    const validate = () => {
        const newErrors = {};
        if (!form.fullName) newErrors.fullName = "Please enter your full name.";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.message) newErrors.message = "Please enter a message, so we know how best to assist you.";
        if (!form.reason) newErrors.reason = "Please select a reason";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handles the updates made to just the fields that are actually changed. In our app, this form is for new messages/submissions, and all fields, but one, are required. Still, this will handle each field as it changes from "" to having data.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // handles what happens when the form is submitted by user
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("submit form", form);
            await submitGetInvolved(form);
        }
    };

  return (
    <Container maxWidth="sm">
        <Paper sx={{ p: 3 }}>
            <form className="form-get-involved" onSubmit={handleSubmit}>
                <FormControl fullWidth required error={!!errors.reason} sx={{ mb: 2 }}>
                    <InputLabel>Reason</InputLabel>
                    <Select name="reason" value={form.reason} onChange={handleChange}>
                        {reasons.map((r) => <MenuItem key={r} value={r}>{r}</MenuItem>)}
                    </Select>
                </FormControl>

                <TextField label="Full Name" name="fullName" fullWidth required value={form.fullName} onChange={handleChange} error={!!errors.fullName} helperText={errors.fullName} sx={{ mb: 2 }} />
                <TextField label="Email" name="email" fullWidth required value={form.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} sx={{ mb: 2 }} />
                <TextField label="Phone" name="phone" fullWidth value={form.phone} onChange={handleChange} sx={{ mb: 2 }} />
                <TextField label="Message" name="message" multiline rows={5} fullWidth required value={form.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} sx={{ mb: 2 }} />

                <Button variant="contained" type="submit">Send</Button>
            </form>
        </Paper>
    </Container>
  );
}