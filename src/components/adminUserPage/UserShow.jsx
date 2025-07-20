import { 
    BooleanField, 
    EmailField, 
    Show, 
    SimpleShowLayout, 
    TextField 
} from 'react-admin';

import './AdminDash.css';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="fullName" />
            <TextField source="zipCode" />
            <EmailField source="email" />
            <BooleanField source="isAdmin" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);