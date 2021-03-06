import gql from 'graphql-tag'

const SIGN_UP_USER = gql`
  mutation signUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`

export const signUpQueries = {
  SIGN_UP_USER
}
