import { Datagrid, List, TextField } from 'react-admin';

export const PantryList = () => (
    <List>
        <Datagrid rowClick="edit"> 
            <TextField source="id" />
            <TextField source="pantryName" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="zipCode" />
            <TextField source="hours" />
            <TextField source="requirements" />
            <TextField source="contact" /> 
        </Datagrid>
    </List>
);