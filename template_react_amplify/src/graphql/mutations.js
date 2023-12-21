/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganizations = /* GraphQL */ `
  mutation CreateOrganizations(
    $input: CreateOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    createOrganizations(input: $input, condition: $condition) {
      id
      assignedDevices
      totalDevices
      users
      cell
      authcode
      name
      email
      billingAddresstimezone
      billingAddressaddress
      billingAddresscountry
      billingAddressstate
      billingAddresspostalCode
      billingAddresscity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrganizations = /* GraphQL */ `
  mutation UpdateOrganizations(
    $input: UpdateOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    updateOrganizations(input: $input, condition: $condition) {
      id
      assignedDevices
      totalDevices
      users
      cell
      authcode
      name
      email
      billingAddresstimezone
      billingAddressaddress
      billingAddresscountry
      billingAddressstate
      billingAddresspostalCode
      billingAddresscity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOrganizations = /* GraphQL */ `
  mutation DeleteOrganizations(
    $input: DeleteOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    deleteOrganizations(input: $input, condition: $condition) {
      id
      assignedDevices
      totalDevices
      users
      cell
      authcode
      name
      email
      billingAddresstimezone
      billingAddressaddress
      billingAddresscountry
      billingAddressstate
      billingAddresspostalCode
      billingAddresscity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
