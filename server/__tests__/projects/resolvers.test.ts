import { gql } from 'apollo-server-koa'
import { print } from 'graphql'
import { graphqlTestCallCreator } from '../helper'
import {
  IProjectInput,
  IInvoiceStatus,
  IMutationProjectResponse
} from '../../src/services/@types/types'

describe.only('================= Project Resolvers =================', async () => {
  // const userData = {
  //   firstName: 'test',
  //   lastName: 'user',
  //   email: 'test@test.com',
  //   password: '12345678'
  // }

  describe.only('--------- addProject ---------', () => {
    // TODO:
    const projectData: IProjectInput = {
      name: 'test',
      incomes: [],
      expenses: [],
      invoiceDate: 'today',
      projectDate: 'tomorrow',
      status: IInvoiceStatus.None
    }
    const mocks = {
      MutationProjectResponse: () => {
        return {
          success: true,
          project: projectData,
          client: null
        }
      }
    }

    const gqlTestCall = graphqlTestCallCreator(mocks)

    test('can add Project user', async () => {
      const addProjectMutation = print(gql`
        mutation addProject($data: ProjectInput!) {
          addProject(
            data: ${projectData}
          ) {
            success
            project
            client
          }
        }
      `)

      const res = await gqlTestCall<{
        addProject: IMutationProjectResponse
      }>(addProjectMutation, projectData)
      expect(res.data).toBeDefined()
      expect(res.data!.addProject.success).toBe(true)
      expect(res.data!.addProject.project).toHaveProperty('name')
    })
  })

  // describe('--------- Login User ---------', async () => {
  //   const mocks = {
  //     RegisterResponse: () => ({ token: 'ashiteonahs' })
  //   }
  //   const gqlTestCall = graphqlTestCallCreator(mocks)

  //   const loginMutation = print(gql`
  //     mutation loginUser($email: String!, $password: String!) {
  //       loginUser(email: $email, password: $password) {
  //         token
  //       }
  //     }
  //   `)

  //   test('can login', async () => {
  //     const res = await gqlTestCall<{ loginUser: IRegisterResponse }>(
  //       loginMutation,
  //       {
  //         email: userData.email,
  //         password: userData.password
  //       }
  //     )
  //     expect(res.data).toBeDefined()
  //     expect(res.data!.loginUser.token).toBeDefined()
  //   })
  // })

  // describe('--------- Update User ---------', async () => {
  //   const updateMutation = print(gql`
  //     mutation updateUser($data: UpdateUserInput!) {
  //       updateUser(data: $data) {
  //         user {
  //           id
  //           firstName
  //           lastName
  //           email
  //         }
  //       }
  //     }
  //   `)

  //   test('can update user', async () => {
  //     const updatedUserData = {
  //       firstName: '1234',
  //       lastName: '1234'
  //     }

  //     const mocks = {
  //       UpdateUserResponse: () => ({
  //         user: () => ({ ...userData, ...updatedUserData })
  //       })
  //     }
  //     const gqlTestCall = graphqlTestCallCreator(mocks)

  //     const res = await gqlTestCall<{ updateUser: IUpdateUserResponse }>(
  //       updateMutation,
  //       { data: updatedUserData }
  //     )

  //     expect(res.data).toBeDefined()
  //     expect(res.data!.updateUser.user.firstName).toBe('1234')
  //     expect(res.data!.updateUser.user.lastName).toBe('1234')
  //     expect(res.data!.updateUser.user.email).toBe('test@test.com')
  //   })
  // })
})
