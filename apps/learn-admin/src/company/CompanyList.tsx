import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="BusinessRegistrationNumber"
          source="businessRegistrationNumber"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <TextField label="KraPin" source="kraPin" />
        <TextField label="Logo" source="logo" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website" source="website" />{" "}
      </Datagrid>
    </List>
  );
};
