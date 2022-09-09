import { SchoolSharp } from '@mui/icons-material';
import {Datagrid, List, TextField, EditButton, BooleanField, Edit, Create, TextInput, BooleanInput,SimpleForm, required, ReferenceInput, choices, SelectInput, TimeInput} from 'react-admin';
//import { TimePicker } from '@mui/x-date-pickers';
// classes m-1 school <ReferenceManyField> 
export const ClassList = () => (
    <List>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />    
            <TextField source="school" />
            <TextField source="blog" />
            <BooleanField source="hide" />
            <TextField source="defaultStartTime" />
            <TextField source="defaultEndTime" />
            <TextField source="defaultInvoiceItem" />
            <TextField source="defaultHoursPerDay" />
            <EditButton />

        </Datagrid>
    </List>

);
const validateInput = async (values) => {
    const errors = {};
    if (!values.hide) {
        errors.hide = "This value is required!";
    }
}

const validator = [required(), validateInput]

// !Edited @R: TextFiled -> TextInput intstead 
export const ClassEdit = () => (
    <Edit title="Edit classes">
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <TextInput disabled source="school" />
            <ReferenceInput source="id" reference="schools" >
                <SelectInput  />
            </ReferenceInput>
            <TextInput source="blog" />
            <BooleanInput source="hide" validate={validator} defaultValue={0}/>
            <TimeInput source="defaultStartTime" />
            <TimeInput source="defaultEndTime" />
            <TextInput source="defaultInvoiceItem" />
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
            <EditButton />
        </SimpleForm>
    </Edit>

);
// !Edited @R: TextFiled -> TextInput intstead 
export const ClassCreate = props => (
    <Create {...props}>
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <ReferenceInput label="school" source="id" reference="schools">
                <SelectInput  />
            </ReferenceInput> 
            <TextInput source="blog" />
            <BooleanInput source="hide" validate={validator} defaultValue={0} />
            <TimeInput source="defaultStartTime" />
            <Timenput source="defaultEndTime" />
            <TextInput source="defaultInvoiceItem" />
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
            <EditButton />
        </SimpleForm>
    </Create>
)

