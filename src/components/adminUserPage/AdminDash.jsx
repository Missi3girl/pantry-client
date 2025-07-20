import React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, fetchUtils } from 'react-admin';
import SimpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './UserList';
import { GetinvolvedList } from './GetInvolvedList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './AdminDash.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

const theme = createTheme();

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = localStorage.getItem('token');

    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, options);
};

// fx that uses our mongodb as the data provider
const dataProvider = SimpleRestProvider(API_BASE, httpClient);

export default function AdminDash() {
    const storedUser = localStorage.getItem("user");
    let currentUser = null;

    if (storedUser) {
        try {
            currentUser = JSON.parse(storedUser);
        } catch (err) {
            console.error("Error parsing user from localStorage in AdminDash:", err);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    } 
    console.log("AdminDash is running for user:", currentUser);

    return (
        <ThemeProvider theme={theme}>
            <>
                <h2>Admin Dashboard: {currentUser?.fullName}</h2>
                <Admin dataProvider={dataProvider} basename="/admin">
                    <Resource name='users' list={UserList} />
                    <Resource name='getInvolved' list={GetinvolvedList} />
                </Admin>
        
            </>        
        </ThemeProvider>
    );
}
