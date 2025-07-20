import { Create, SimpleForm, TextInput } from "react-admin";

import './AdminDash.css';

export const PantryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="pantryName" />
            <TextInput source="address" />
            <TextInput source="city" />
            <TextInput source="state" />
            <TextInput source="zipCode" />
            <TextInput source="hours" />
            <TextInput source="requirements" />
            <TextInput source="contact" />
            <TextInput source="lat" /> 
            <TextInput source="long" /> 
        </SimpleForm>
    </Create>
);