/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganizations = /* GraphQL */ `
  subscription OnCreateOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onCreateOrganizations(filter: $filter) {
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
export const onUpdateOrganizations = /* GraphQL */ `
  subscription OnUpdateOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onUpdateOrganizations(filter: $filter) {
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
export const onDeleteOrganizations = /* GraphQL */ `
  subscription OnDeleteOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onDeleteOrganizations(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
