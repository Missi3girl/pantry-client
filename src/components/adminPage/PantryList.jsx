import { 
    Datagrid, 
    List, 
    TextField
} from 'react-admin';

import "./AdminDash.css";


export const PantryList = () => (
    <List>
        <Datagrid> 
            <TextField source="id" />
            <TextField source="pantryName" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="zipCode" />
            <TextField source="hours" />
            <TextField source="requirements" />
            <TextField source="contact" /> 
            <TextField source="lat" /> 
            <TextField source="lng" /> 
        </Datagrid>
    </List>
);