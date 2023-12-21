import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly assignedDevices?: string | null;
  readonly totalDevices?: string | null;
  readonly users?: string | null;
  readonly cell?: string | null;
  readonly authcode?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly billingAddresstimezone?: string | null;
  readonly billingAddressaddress?: string | null;
  readonly billingAddresscountry?: string | null;
  readonly billingAddressstate?: string | null;
  readonly billingAddresspostalCode?: string | null;
  readonly billingAddresscity?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly assignedDevices?: string | null;
  readonly totalDevices?: string | null;
  readonly users?: string | null;
  readonly cell?: string | null;
  readonly authcode?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly billingAddresstimezone?: string | null;
  readonly billingAddressaddress?: string | null;
  readonly billingAddresscountry?: string | null;
  readonly billingAddressstate?: string | null;
  readonly billingAddresspostalCode?: string | null;
  readonly billingAddresscity?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organizations = LazyLoading extends LazyLoadingDisabled ? EagerOrganizations : LazyOrganizations

export declare const Organizations: (new (init: ModelInit<Organizations>) => Organizations) & {
  copyOf(source: Organizations, mutator: (draft: MutableModel<Organizations>) => MutableModel<Organizations> | void): Organizations;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}