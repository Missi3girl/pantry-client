import React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import SimpleRestProvider from 'ra-data-simple-rest';
const API_BASE = import.meta.env.VITE_API_BASE_URL
import './AdminDash.css';

// fx that uses our mongodb as the data provider
const dataProvider = SimpleRestProvider(`${API_BASE}`);

export default function AdminDash() {
  return (
    <>
        <Admin dataProvider={dataProvider}>
            <Resource name='users' list={ListGuesser} />
        </Admin>
   
    </>
  )
};

{/* <Resource name='submissions' />
<Resource name='pantries' /> */}