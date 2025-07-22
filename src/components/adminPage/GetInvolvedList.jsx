import { 
    Datagrid, 
    DateField, 
    EmailField, 
    List, 
    TextField,
    FunctionField
} from 'react-admin';

import "./AdminDash.css";


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
