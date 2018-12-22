// import * as React from 'react'
// import { connect } from 'react-redux'
// import { getFormValues } from 'redux-form'
// import {
//   getSingleProject,
//   updateIncomesAndExpenses
// } from '../../redux/modules/entities/project'
// import { LoadingIcon } from '../UI/LoadingIcon'
// import EditExpenseIncomeForm from './formConponents/EditExpenseIncomeForm'
// import GeneralEditForm from './formConponents/GeneralEditForm'
// import EditFormModal from './modal/EditFormModal'
// import SingleProject from './SingleProject1'

// const incomes = 'incomes'
// const expenses = 'expenses'
// const general = 'general'

// // TODO: Edit Contact Person.
// // TODO: Order by date.
// // TODO: Search by name | date | month | status === 'none' items.
// class SingleProjectComponent extends React.Component<any> {
//   state = {
//     isIncomeModalOpen: false,
//     isExpenseModalOpen: false,
//     isGeneralEditModalOpen: false
//   }

//   componentDidMount() {
//     const {
//       project,
//       getSingleProject,
//       match: {
//         params: { id }
//       }
//     } = this.props
//     if (!project) {
//       getSingleProject(id)
//     }
//   }

//   updateItems = type => {
//     const {
//       project,
//       updateIncomesAndExpenses,
//       incomesAndExpenses,
//       generalInfo
//     } = this.props

//     const dataToPass = type === general ? generalInfo : incomesAndExpenses
//     updateIncomesAndExpenses(project.get('id'), dataToPass)
//     this.closeModal()
//   }

//   openModal = type => {
//     this.setState({ [type]: true })
//   }
//   closeModal = () => {
//     this.setState({
//       isIncomeModalOpen: false,
//       isExpenseModalOpen: false,
//       isGeneralEditModalOpen: false
//     })
//   }

//   render() {
//     if (this.props.fetching || !this.props.project) return <LoadingIcon />
//     const invoiceStatusFromForm =
//       this.props.generalInfo && this.props.generalInfo.status

//     return (
//       <React.Fragment>
//         <SingleProject
//           project={this.props.project}
//           openModal={this.openModal}
//           posting={this.props.posting}
//         />

//         {/* modals */}
//         {[incomes, expenses].map(type => {
//           const isOpen =
//             type === incomes
//               ? this.state.isIncomeModalOpen
//               : this.state.isExpenseModalOpen
//           return (
//             <EditFormModal
//               isOpen={isOpen}
//               closeModal={this.closeModal}
//               cofirmAndEdit={this.updateItems}
//               type={type}
//               key={type}
//             >
//               <EditExpenseIncomeForm
//                 type={type}
//                 defaultValues={this.props.project.get(type)}
//               />
//             </EditFormModal>
//           )
//         })}

//         <EditFormModal
//           isOpen={this.state.isGeneralEditModalOpen}
//           closeModal={this.closeModal}
//           cofirmAndEdit={this.updateItems}
//           type={general}
//         >
//           <GeneralEditForm
//             project={this.props.project}
//             invoiceStatusFromForm={invoiceStatusFromForm}
//           />
//         </EditFormModal>
//       </React.Fragment>
//     )
//   }
// }
// const mapSateToProps = (state, props) => ({
//   fetching: state.entities.projects._status.fetching,
//   posting: state.entities.projects._status.posting,
//   project: state.entities.projects.data.get(props.match.params.id),
//   incomesAndExpenses: getFormValues('editExpenseIncome')(state),
//   generalInfo: getFormValues('generalInfo')(state)
// })
// export default connect(
//   mapSateToProps,
//   { getSingleProject, updateIncomesAndExpenses }
// )(SingleProjectComponent)
