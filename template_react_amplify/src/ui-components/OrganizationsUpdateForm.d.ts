/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Organizations } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizationsUpdateFormInputValues = {
    assignedDevices?: string;
    totalDevices?: string;
    users?: string;
    cell?: string;
    authcode?: string;
    name?: string;
    email?: string;
    billingAddresstimezone?: string;
    billingAddressaddress?: string;
    billingAddresscountry?: string;
    billingAddressstate?: string;
    billingAddresspostalCode?: string;
    billingAddresscity?: string;
    createdAt?: string;
};
export declare type OrganizationsUpdateFormValidationValues = {
    assignedDevices?: ValidationFunction<string>;
    totalDevices?: ValidationFunction<string>;
    users?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
    authcode?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    billingAddresstimezone?: ValidationFunction<string>;
    billingAddressaddress?: ValidationFunction<string>;
    billingAddresscountry?: ValidationFunction<string>;
    billingAddressstate?: ValidationFunction<string>;
    billingAddresspostalCode?: ValidationFunction<string>;
    billingAddresscity?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationsUpdateFormOverridesProps = {
    OrganizationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assignedDevices?: PrimitiveOverrideProps<TextFieldProps>;
    totalDevices?: PrimitiveOverrideProps<TextFieldProps>;
    users?: PrimitiveOverrideProps<TextFieldProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
    authcode?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddresstimezone?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddressaddress?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddresscountry?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddressstate?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddresspostalCode?: PrimitiveOverrideProps<TextFieldProps>;
    billingAddresscity?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    organizations?: Organizations;
    onSubmit?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onSuccess?: (fields: OrganizationsUpdateFormInputValues) => void;
    onError?: (fields: OrganizationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onValidate?: OrganizationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationsUpdateForm(props: OrganizationsUpdateFormProps): React.ReactElement;
