import { Form } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <Form>
        <input type='text' name='id' placeholder="id"/>
        <input type='password' name='pw' placeholder="pw"/>
        <button type='submit'>로그인</button>
      </Form>
    </div>
  )
};
