export interface UpdateUserInput {
  firstName?: string | null;

  lastName?: string | null;

  email?: string | null;

  phone?: string | null;

  password?: string | null;

  btw?: string | null;

  kvk?: string | null;

  iban?: string | null;

  streetAddress?: string | null;

  postalCode?: string | null;

  city?: string | null;
}

export interface ProjectInput {
  invoiceNumber?: string | null;

  invoiceDate?: string | null;

  projectDate?: string | null;

  name?: string | null;

  date?: string | null;

  status?: InvoiceStatus | null;

  client?: ClientInput | null;

  expenses?: ExpenseAndIncomeInput[] | null;

  incomes?: ExpenseAndIncomeInput[] | null;
}

export interface ClientInput {
  id?: string | null;

  firstName?: string | null;

  lastName?: string | null;

  email?: string | null;

  phone?: string | null;

  streetAddress?: string | null;

  postalCode?: string | null;

  city?: string | null;
}

export interface ExpenseAndIncomeInput {
  name?: string | null;

  price?: string | null;

  quantity?: number | null;

  taxRate?: number | null;
}

export enum InvoiceStatus {
  None = "none",
  Invoice = "invoice",
  Paid = "paid"
}

export type Date = any;

export type Blob = any;

// ====================================================
// Documents
// ====================================================

export namespace GetClientsList {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    getClientsByUser: GetClientsByUser[] | null;
  };

  export type GetClientsByUser = ClientFragment.Fragment;
}

export namespace SingleClient {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    getSingleClient: GetSingleClient | null;
  };

  export type GetSingleClient = {
    __typename?: "Client";

    streetAddress: string | null;

    postalCode: string | null;

    city: string | null;
  } & ClientFragment.Fragment;
}

export namespace AddClient {
  export type Variables = {
    data: ClientInput;
  };

  export type Mutation = {
    __typename?: "Mutation";

    addClient: AddClient | null;
  };

  export type AddClient = {
    __typename?: "ClientMutationResponse";

    client: Client | null;
  };

  export type Client = ClientFragment.Fragment;
}

export namespace UpdateClient {
  export type Variables = {
    clientId: string;
    data: ClientInput;
  };

  export type Mutation = {
    __typename?: "Mutation";

    updateClient: UpdateClient | null;
  };

  export type UpdateClient = {
    __typename?: "ClientMutationResponse";

    message: string | null;

    client: Client | null;
  };

  export type Client = {
    __typename?: "Client";

    streetAddress: string | null;

    postalCode: string | null;

    city: string | null;
  } & ClientFragment.Fragment;
}

export namespace UpdateClientProject {
  export type Variables = {
    clientId: string;
    projectId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    updateClientProject: UpdateClientProject | null;
  };

  export type UpdateClientProject = {
    __typename?: "ClientMutationResponse";

    client: Client | null;
  };

  export type Client = {
    __typename?: "Client";

    streetAddress: string | null;

    postalCode: string | null;

    city: string | null;
  } & ClientFragment.Fragment;
}

export namespace DeleteClient {
  export type Variables = {
    clientId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deleteClient: DeleteClient | null;
  };

  export type DeleteClient = {
    __typename?: "ClientMutationResponse";

    client: Client | null;
  };

  export type Client = {
    __typename?: "Client";

    id: string;
  };
}

export namespace RemoveClientFromProject {
  export type Variables = {
    clientId: string;
    projectId: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    removeClientFromProject: RemoveClientFromProject | null;
  };

  export type RemoveClientFromProject = {
    __typename?: "ClientMutationResponse";

    client: Client | null;
  };

  export type Client = ClientFragment.Fragment;
}

export namespace ClientFragment {
  export type Fragment = {
    __typename?: "Client";

    id: string;

    firstName: string | null;

    lastName: string | null;

    email: string | null;

    phone: string | null;
  };
}

export namespace PriceFragment {
  export type Fragment = {
    __typename?: "ExpenseAndIncome";

    price: string | null;

    quantity: number | null;

    taxRate: number | null;
  };
}

export namespace BasicInfoFragment {
  export type Fragment = {
    __typename?: "Project";

    id: string;

    name: string;

    projectDate: Date | null;

    invoiceDate: Date | null;

    status: InvoiceStatus;
  };
}

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Fragments
// ====================================================

export namespace ClientFragment {
  export const FragmentDoc = gql`
    fragment ClientFragment on Client {
      id
      firstName
      lastName
      email
      phone
    }
  `;
}

export namespace PriceFragment {
  export const FragmentDoc = gql`
    fragment PriceFragment on ExpenseAndIncome {
      price
      quantity
      taxRate
    }
  `;
}

export namespace BasicInfoFragment {
  export const FragmentDoc = gql`
    fragment BasicInfoFragment on Project {
      id
      name
      projectDate
      invoiceDate
      status
    }
  `;
}

// ====================================================
// Components
// ====================================================

export namespace GetClientsList {
  export const Document = gql`
    query getClientsList {
      getClientsByUser {
        ...ClientFragment
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace SingleClient {
  export const Document = gql`
    query singleClient($id: String!) {
      getSingleClient(clientId: $id) {
        ...ClientFragment
        streetAddress
        postalCode
        city
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace AddClient {
  export const Document = gql`
    mutation addClient($data: ClientInput!) {
      addClient(data: $data) {
        client {
          ...ClientFragment
        }
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace UpdateClient {
  export const Document = gql`
    mutation updateClient($clientId: String!, $data: ClientInput!) {
      updateClient(clientId: $clientId, data: $data) {
        message
        client {
          ...ClientFragment
          streetAddress
          postalCode
          city
        }
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace UpdateClientProject {
  export const Document = gql`
    mutation updateClientProject($clientId: String!, $projectId: String!) {
      updateClientProject(clientId: $clientId, projectId: $projectId) {
        client {
          ...ClientFragment
          streetAddress
          postalCode
          city
        }
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace DeleteClient {
  export const Document = gql`
    mutation deleteClient($clientId: String!) {
      deleteClient(clientId: $clientId) {
        client {
          id
        }
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace RemoveClientFromProject {
  export const Document = gql`
    mutation removeClientFromProject($clientId: String!, $projectId: String!) {
      removeClientFromProject(clientId: $clientId, projectId: $projectId) {
        client {
          ...ClientFragment
        }
      }
    }

    ${ClientFragment.FragmentDoc}
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
