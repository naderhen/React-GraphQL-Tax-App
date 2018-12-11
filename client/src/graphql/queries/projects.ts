import gql from 'graphql-tag'

export const GET_PROJECT_OVERVIEW = gql`
  query getProjectOverview($userId: String!) {
    getProjectsByUserId(userId: $userId) {
      id
      name
      date
      invoiceDate
      incomes {
        price
        quantity
      }
      status
    }
  }
`