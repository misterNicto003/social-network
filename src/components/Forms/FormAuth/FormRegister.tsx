import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';

interface RegForm {
  username: string;
  phone: number;
  password: string | number
}

export const FormRegister = () => {
  const {register, handleSubmit} = useForm<RegForm>({
   
  })

  const submit: SubmitHandler<RegForm> = data => {
    console.log(data)
    writeUserData(data)
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register('username', {required: true})}/>
      <input type="number" {...register('phone', {required: true})}/>
      <input type="password" {...register('password', {required: true})}/>
      <button>Отправить</button>
    </form>
  )
}
