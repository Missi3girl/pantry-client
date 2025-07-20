import { useMediaQuery } from "@mui/material";
import { BooleanField, Datagrid, TextField, EmailField, List, SimpleList } from 'react-admin';
import "./AdminDash.css";

export const UserList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.email}
                    tertiaryText={(record) => record.zipCode}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="fullName" />
                    <TextField source="zipCode" />
                    <EmailField source="email" />
                    <BooleanField source="isAdmin" />
                    <TextField source="id" />
                </Datagrid>
            )}
        </List> 
    );
};