import { useMediaQuery } from "@mui/material";
import { 
    BooleanField, 
    Datagrid, 
    TextField, 
    EmailField, 
    List, 
    SimpleList,
    TextInput,
    ReferenceInput
} from 'react-admin';

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
 <Datagrid>
                    <TextField
                    source="fullName" 
                    label="Full Name"
                    sx={{ maxWidth: 200, whiteSpace: 'normal'}}
                    />
                    <TextField
                    source="zipCode"
                    sx={{ maxWidth: 100 }}
                    />
                    <EmailField source="email"
                    sx={{ maxWidth: 100 }}
                    />
                    <BooleanField source="isAdmin" 
                    sx={{ maxWidth: 50 }}
                    />
                    <TextField source="id" 
                    sx={{ maxWidth: 300 }}/>
                </Datagrid>
            )}
        </List> 
    );
};
