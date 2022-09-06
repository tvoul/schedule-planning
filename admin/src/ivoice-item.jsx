import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, Create  } from 'react-admin';

export const InvoiceItemList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField disabled source="id" />
            <TextField source="title" />
            <TextField source="unit" />
            <TextField source="netPrice" />
            <EditButton />
        </Datagrid>
    </List>
);

export const InvoiceItemEdit = props => (
    <Edit title="Edit invoice_items">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" />
        </SimpleForm>
    </Edit>
);

export const InvoiceItemCreate = () => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" />
        </SimpleForm>
    </Create>
)