import { Datagrid, DateField, EmailField, List, TextField } from 'react-admin';

export const GetinvolvedList = () => (
    <List>
        <Datagrid>
            <TextField source="fullName" />
            <TextField source="phoneNumber" />
            <EmailField source="email" />
            <TextField source="message" />
            <TextField source="typeOfInquiry" />
            <DateField source="date" />
            <TextField source="id" />
        </Datagrid>
    </List>
);
