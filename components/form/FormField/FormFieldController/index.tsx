import { UseFormReturn } from 'react-hook-form'
import { ReactNode } from 'react'

interface FormFieldControllerProps {
  name: string
  form: UseFormReturn<any>
  inputProps: any
  children: ReactNode
}

function FormFieldController(props: FormFieldControllerProps): JSX.Element {
  return <></>
}

export default FormFieldController
