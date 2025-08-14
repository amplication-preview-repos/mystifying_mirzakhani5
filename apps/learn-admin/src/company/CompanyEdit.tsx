import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="BusinessRegistrationNumber"
          source="businessRegistrationNumber"
        />
        <SelectInput
          source="currency"
          label="Currency"
          choices={[
            { label: "KES", value: "Kes" },
            { label: "USD", value: "Usd" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="KraPin" source="kraPin" />
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
