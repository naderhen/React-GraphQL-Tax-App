import { gql } from 'apollo-server-koa'

export const projectSchema = gql`
  type Project {
    id: String!
    invoiceNumber: String!
    invoiceDate: Date
    name: String!
    projectDate: Date
    streetAddress: String
    city: String
    link: String
    status: INVOICE_STATUS!
    user: String!
    expenses: [ExpenseAndIncome!]
    incomes: [ExpenseAndIncome!]
  }

  type Query {
    getProjectsByUserId(userId: String!): [Project!]!
    getSingleProject(projectId: String!): Project
  }

  type Mutation {
    updateProject(
      projectId: String!
      data: ProjectInput!
    ): MutationProjectResponse!
    addProject(data: ProjectInput!): MutationProjectResponse
    deleteProject(projectId: String!): MutationProjectResponse
  }

  type MutationProjectResponse {
    success: Boolean!
    message: String
    project: Project!
    client: Client
  }

  input ProjectInput {
    invoiceNumber: String
    invoiceDate: String
    projectDate: String
    name: String
    date: String
    status: INVOICE_STATUS
    client: ClientInput
    expenses: [ExpenseAndIncomeInput!]
    incomes: [ExpenseAndIncomeInput!]
  }

  scalar Date
  enum INVOICE_STATUS {
    none
    invoice
    paid
  }
`
