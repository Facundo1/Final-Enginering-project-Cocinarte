import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { registerUser } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux'

import { Form, Input, Button } from 'antd'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

function RegisterPage(props) {
  const dispatch = useDispatch()
  return (
    <div id='loginBackground'>
      <Formik
        initialValues={{
          email: '',
          lastname: '',
          name: '',
          password: '',
          confirmPassword: '',
          accountType: 'Cuenta gratuita'
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Nombre requerido'),
          lastname: Yup.string().required('Apellido requerido'),
          email: Yup.string()
            .email('Email invalido')
            .required('Email requerido'),
          password: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .required('Contraseña requerida'),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref('password'), null],
              'Las contraseñas deben coincidir'
            )
            .required('Debe confirmar la contraseña')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let dataToSubmit = {
              email: values.email,
              password: values.password,
              name: values.name,
              lastname: values.lastname,
              image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
              accountType: 'Cuenta gratuita'
            }

            dispatch(registerUser(dataToSubmit)).then(response => {
              if (response.payload.success) {
                props.history.push('/login')
              } else {
                alert(response.payload.err.errmsg)
              }
            })

            setSubmitting(false)
          }, 500)
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props
          return (
            <div className='app'>
              <h2>Registro</h2>
              <Form
                style={{ minWidth: '375px' }}
                {...formItemLayout}
                onSubmit={handleSubmit}
              >
                <Form.Item required label='Nombre'>
                  <Input
                    id='name'
                    placeholder='Ingrese su nombre'
                    type='text'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.name && touched.name && (
                    <div className='input-feedback'>{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Apellido'>
                  <Input
                    id='lastname'
                    placeholder='Ingrese su apellido'
                    type='text'
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastname && touched.lastname
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.lastname && touched.lastname && (
                    <div className='input-feedback'>{errors.lastname}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label='Email'
                  hasFeedback
                  validateStatus={
                    errors.email && touched.email ? 'error' : 'success'
                  }
                >
                  <Input
                    id='email'
                    placeholder='Ingresar Email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.email && touched.email && (
                    <div className='input-feedback'>{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label='Contraseña'
                  hasFeedback
                  validateStatus={
                    errors.password && touched.password ? 'error' : 'success'
                  }
                >
                  <Input
                    id='password'
                    placeholder='Ingresa la contraseña'
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.password && touched.password && (
                    <div className='input-feedback'>{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Confirmar' hasFeedback>
                  <Input
                    id='confirmPassword'
                    placeholder='Confirme contraseña'
                    type='password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className='input-feedback'>
                      {errors.confirmPassword}
                    </div>
                  )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    onClick={handleSubmit}
                    type='primary'
                    disabled={isSubmitting}
                  >
                    Registrarse
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default RegisterPage
