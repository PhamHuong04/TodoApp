import { ChangeEventHandler, useState } from 'react';

interface InitialValue {
  content: string
  dueDate: string
}

interface UseHandleChange {
  values: InitialValue
  setValues: React.Dispatch<React.SetStateAction<InitialValue>>
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export default function usehandleChange (
  initialValues: InitialValue
): UseHandleChange {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return {
    values,
    setValues,
    handleChange
  };
}
