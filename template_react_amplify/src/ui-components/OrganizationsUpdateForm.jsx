/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Organizations } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function OrganizationsUpdateForm(props) {
  const {
    id: idProp,
    organizations: organizationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    assignedDevices: "",
    totalDevices: "",
    users: "",
    cell: "",
    authcode: "",
    name: "",
    email: "",
    billingAddresstimezone: "",
    billingAddressaddress: "",
    billingAddresscountry: "",
    billingAddressstate: "",
    billingAddresspostalCode: "",
    billingAddresscity: "",
    createdAt: "",
  };
  const [assignedDevices, setAssignedDevices] = React.useState(
    initialValues.assignedDevices
  );
  const [totalDevices, setTotalDevices] = React.useState(
    initialValues.totalDevices
  );
  const [users, setUsers] = React.useState(initialValues.users);
  const [cell, setCell] = React.useState(initialValues.cell);
  const [authcode, setAuthcode] = React.useState(initialValues.authcode);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [billingAddresstimezone, setBillingAddresstimezone] = React.useState(
    initialValues.billingAddresstimezone
  );
  const [billingAddressaddress, setBillingAddressaddress] = React.useState(
    initialValues.billingAddressaddress
  );
  const [billingAddresscountry, setBillingAddresscountry] = React.useState(
    initialValues.billingAddresscountry
  );
  const [billingAddressstate, setBillingAddressstate] = React.useState(
    initialValues.billingAddressstate
  );
  const [billingAddresspostalCode, setBillingAddresspostalCode] =
    React.useState(initialValues.billingAddresspostalCode);
  const [billingAddresscity, setBillingAddresscity] = React.useState(
    initialValues.billingAddresscity
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = organizationsRecord
      ? { ...initialValues, ...organizationsRecord }
      : initialValues;
    setAssignedDevices(cleanValues.assignedDevices);
    setTotalDevices(cleanValues.totalDevices);
    setUsers(cleanValues.users);
    setCell(cleanValues.cell);
    setAuthcode(cleanValues.authcode);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setBillingAddresstimezone(cleanValues.billingAddresstimezone);
    setBillingAddressaddress(cleanValues.billingAddressaddress);
    setBillingAddresscountry(cleanValues.billingAddresscountry);
    setBillingAddressstate(cleanValues.billingAddressstate);
    setBillingAddresspostalCode(cleanValues.billingAddresspostalCode);
    setBillingAddresscity(cleanValues.billingAddresscity);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [organizationsRecord, setOrganizationsRecord] = React.useState(
    organizationsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Organizations, idProp)
        : organizationsModelProp;
      setOrganizationsRecord(record);
    };
    queryData();
  }, [idProp, organizationsModelProp]);
  React.useEffect(resetStateValues, [organizationsRecord]);
  const validations = {
    assignedDevices: [],
    totalDevices: [],
    users: [],
    cell: [],
    authcode: [],
    name: [],
    email: [],
    billingAddresstimezone: [],
    billingAddressaddress: [],
    billingAddresscountry: [],
    billingAddressstate: [],
    billingAddresspostalCode: [],
    billingAddresscity: [],
    createdAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          assignedDevices,
          totalDevices,
          users,
          cell,
          authcode,
          name,
          email,
          billingAddresstimezone,
          billingAddressaddress,
          billingAddresscountry,
          billingAddressstate,
          billingAddresspostalCode,
          billingAddresscity,
          createdAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Organizations.copyOf(organizationsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrganizationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Assigned devices"
        isRequired={false}
        isReadOnly={false}
        value={assignedDevices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices: value,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.assignedDevices ?? value;
          }
          if (errors.assignedDevices?.hasError) {
            runValidationTasks("assignedDevices", value);
          }
          setAssignedDevices(value);
        }}
        onBlur={() => runValidationTasks("assignedDevices", assignedDevices)}
        errorMessage={errors.assignedDevices?.errorMessage}
        hasError={errors.assignedDevices?.hasError}
        {...getOverrideProps(overrides, "assignedDevices")}
      ></TextField>
      <TextField
        label="Total devices"
        isRequired={false}
        isReadOnly={false}
        value={totalDevices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices: value,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.totalDevices ?? value;
          }
          if (errors.totalDevices?.hasError) {
            runValidationTasks("totalDevices", value);
          }
          setTotalDevices(value);
        }}
        onBlur={() => runValidationTasks("totalDevices", totalDevices)}
        errorMessage={errors.totalDevices?.errorMessage}
        hasError={errors.totalDevices?.hasError}
        {...getOverrideProps(overrides, "totalDevices")}
      ></TextField>
      <TextField
        label="Users"
        isRequired={false}
        isReadOnly={false}
        value={users}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users: value,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.users ?? value;
          }
          if (errors.users?.hasError) {
            runValidationTasks("users", value);
          }
          setUsers(value);
        }}
        onBlur={() => runValidationTasks("users", users)}
        errorMessage={errors.users?.errorMessage}
        hasError={errors.users?.hasError}
        {...getOverrideProps(overrides, "users")}
      ></TextField>
      <TextField
        label="Cell"
        isRequired={false}
        isReadOnly={false}
        value={cell}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell: value,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.cell ?? value;
          }
          if (errors.cell?.hasError) {
            runValidationTasks("cell", value);
          }
          setCell(value);
        }}
        onBlur={() => runValidationTasks("cell", cell)}
        errorMessage={errors.cell?.errorMessage}
        hasError={errors.cell?.hasError}
        {...getOverrideProps(overrides, "cell")}
      ></TextField>
      <TextField
        label="Authcode"
        isRequired={false}
        isReadOnly={false}
        value={authcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode: value,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.authcode ?? value;
          }
          if (errors.authcode?.hasError) {
            runValidationTasks("authcode", value);
          }
          setAuthcode(value);
        }}
        onBlur={() => runValidationTasks("authcode", authcode)}
        errorMessage={errors.authcode?.errorMessage}
        hasError={errors.authcode?.hasError}
        {...getOverrideProps(overrides, "authcode")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name: value,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email: value,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Billing addresstimezone"
        isRequired={false}
        isReadOnly={false}
        value={billingAddresstimezone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone: value,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddresstimezone ?? value;
          }
          if (errors.billingAddresstimezone?.hasError) {
            runValidationTasks("billingAddresstimezone", value);
          }
          setBillingAddresstimezone(value);
        }}
        onBlur={() =>
          runValidationTasks("billingAddresstimezone", billingAddresstimezone)
        }
        errorMessage={errors.billingAddresstimezone?.errorMessage}
        hasError={errors.billingAddresstimezone?.hasError}
        {...getOverrideProps(overrides, "billingAddresstimezone")}
      ></TextField>
      <TextField
        label="Billing addressaddress"
        isRequired={false}
        isReadOnly={false}
        value={billingAddressaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress: value,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddressaddress ?? value;
          }
          if (errors.billingAddressaddress?.hasError) {
            runValidationTasks("billingAddressaddress", value);
          }
          setBillingAddressaddress(value);
        }}
        onBlur={() =>
          runValidationTasks("billingAddressaddress", billingAddressaddress)
        }
        errorMessage={errors.billingAddressaddress?.errorMessage}
        hasError={errors.billingAddressaddress?.hasError}
        {...getOverrideProps(overrides, "billingAddressaddress")}
      ></TextField>
      <TextField
        label="Billing addresscountry"
        isRequired={false}
        isReadOnly={false}
        value={billingAddresscountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry: value,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddresscountry ?? value;
          }
          if (errors.billingAddresscountry?.hasError) {
            runValidationTasks("billingAddresscountry", value);
          }
          setBillingAddresscountry(value);
        }}
        onBlur={() =>
          runValidationTasks("billingAddresscountry", billingAddresscountry)
        }
        errorMessage={errors.billingAddresscountry?.errorMessage}
        hasError={errors.billingAddresscountry?.hasError}
        {...getOverrideProps(overrides, "billingAddresscountry")}
      ></TextField>
      <TextField
        label="Billing addressstate"
        isRequired={false}
        isReadOnly={false}
        value={billingAddressstate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate: value,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddressstate ?? value;
          }
          if (errors.billingAddressstate?.hasError) {
            runValidationTasks("billingAddressstate", value);
          }
          setBillingAddressstate(value);
        }}
        onBlur={() =>
          runValidationTasks("billingAddressstate", billingAddressstate)
        }
        errorMessage={errors.billingAddressstate?.errorMessage}
        hasError={errors.billingAddressstate?.hasError}
        {...getOverrideProps(overrides, "billingAddressstate")}
      ></TextField>
      <TextField
        label="Billing addresspostal code"
        isRequired={false}
        isReadOnly={false}
        value={billingAddresspostalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode: value,
              billingAddresscity,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddresspostalCode ?? value;
          }
          if (errors.billingAddresspostalCode?.hasError) {
            runValidationTasks("billingAddresspostalCode", value);
          }
          setBillingAddresspostalCode(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "billingAddresspostalCode",
            billingAddresspostalCode
          )
        }
        errorMessage={errors.billingAddresspostalCode?.errorMessage}
        hasError={errors.billingAddresspostalCode?.hasError}
        {...getOverrideProps(overrides, "billingAddresspostalCode")}
      ></TextField>
      <TextField
        label="Billing addresscity"
        isRequired={false}
        isReadOnly={false}
        value={billingAddresscity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.billingAddresscity ?? value;
          }
          if (errors.billingAddresscity?.hasError) {
            runValidationTasks("billingAddresscity", value);
          }
          setBillingAddresscity(value);
        }}
        onBlur={() =>
          runValidationTasks("billingAddresscity", billingAddresscity)
        }
        errorMessage={errors.billingAddresscity?.errorMessage}
        hasError={errors.billingAddresscity?.hasError}
        {...getOverrideProps(overrides, "billingAddresscity")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignedDevices,
              totalDevices,
              users,
              cell,
              authcode,
              name,
              email,
              billingAddresstimezone,
              billingAddressaddress,
              billingAddresscountry,
              billingAddressstate,
              billingAddresspostalCode,
              billingAddresscity,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || organizationsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || organizationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
