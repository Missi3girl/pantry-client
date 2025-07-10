import { useState, useEffect } from 'react'
import './App.css'
import InvlvForm from './components/getInvolvedPage/InvlvForm'

function App() {

    return (
        <>
            <h1>Welcome to your front end</h1>
            <InvlvForm /> 
        </>
    )
}

export default App


// ! I do not like the layout of the form and may need to dive deeper into what it means to link the form with backend because I sent the form but it rendered nothing inside the database, and neither did my newest email from Frankie (sent via postman)