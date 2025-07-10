import { useState } from 'react';
import { submitGetInvolved } from '../../services/getInvlvdSvc';

export default function InvlvForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        reason: "" // a dropdown menu
    });
    // handles the updates made to just the fields that are actually changed. In our app, this form is for new messages/submissions, and all fields, but one, are required. Still, this will handle each field as it changes from "" to having data.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // handles what happens when the form is submitted by user
    const handleSubmit = async (e) => {
        e.preventdefault();

        try {
            const response = await submitGetInvolved(form);
            console.log("Success!", response);
        } catch (err) {
            console.error("Error while submitting:", err);
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select name="reason" onChange={handleChange} value={form.reason}>
                <option value="">Select a reason</option>
                <option value="help">I need help</option>
                <option value="volunteer">I want to volunteer</option>
                <option value="new">New pantry suggestion</option>
                <option value="update">Update a current panrty</option>
            </select>
            <input name="name" onChange={handleChange} value={form.name} />
            <input name="email" onChange={handleChange} value={form.email} />
            <input name="phoneNumber" onChange={handleChange} value={form.phoneNumber} />
            <textarea name="message" onChange={handleChange} value={form.message}></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  );
}
