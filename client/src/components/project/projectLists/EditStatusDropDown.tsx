import { Formik, FormikProps } from 'formik'
import * as React from 'react'
import { renderStatusField } from 'src/libs/forms/renderFields/renderDropdown'
import { LoadingIcon } from '../../UI/LoadingIcon'
import { EditStatusChildProps } from './EditStatusContainer'

interface DropdownStatusProps {
  status: EditStatusChildProps['status']
}

export const EditStatusDropdown: React.FunctionComponent<
  DropdownStatusProps & EditStatusChildProps
> = props => {
  if (props.data && props.data.loading) return <LoadingIcon size={25} />

  return (
    <Formik
      onSubmit={(values: DropdownStatusProps) =>
        props.onSubmit({
          variables: {
            projectId: props.projectId,
            data: values
          }
        })
      }
      initialValues={{ status: props.status }}
      render={({
        values,
        handleChange,
        handleSubmit
      }: FormikProps<DropdownStatusProps>) => {
        return (
          <React.Fragment>
            {renderStatusField({
              value: values.status || '',
              onChange: e => {
                handleChange(e)
                handleSubmit()
              },
              name: 'status',
              showLabel: false
            })}
          </React.Fragment>
        )
      }}
    />
  )
}
