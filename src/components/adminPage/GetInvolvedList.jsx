import { 
    Datagrid, 
    DateField, 
    EmailField, 
    List, 
    TextField,
    FunctionField,
    //TextInput,
    //ReferenceInput
} from 'react-admin';

import "./AdminDash.css";

// ? Try this search field again later - when doing so, don't forget to put filters={submissionFilters} inside the <List> - same with subsequent List.jsx files inside adminPage
/* const submissionFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
   <ReferenceInput source="userId" label="User" reference="users" />
]; */

export const GetInvolvedList = () => (
    <List>
        <Datagrid>
            <TextField source="fullName" />
            <TextField source="phoneNumber" />
            <EmailField source="email" />
            <FunctionField 
                label="Exerpt of Email" 
                render={(record) => `${record.message.substring(0, 20)}...`} 
            />
            <TextField source="typeOfInquiry" />
            <DateField source="date" />
            <TextField source="id" />
        </Datagrid>
    </List>
);
