import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addCashPay } from '../../../_actions/cash_pays_actions'
import { useDispatch } from 'react-redux'

import { Form, Input, Button } from 'antd'

function AddCashPays(props) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        userEmail: '',
        userName: '',
        UserLastName: '',
        montOfPay: '',
        date: ''
      }}
      validationSchema={Yup.object().shape({
        userEmail: Yup.string().required('Email requerido'),
        userName: Yup.string().required('Nombre requerido'),
        UserLastName: Yup.string().required('Apellido requerido'),
        montOfPay: Yup.number().required('Monto requerido').typeError("Solo se permiten numeros"),
        date: Yup.string().required('Fecha requerida')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            userEmail: values.userEmail,
            userName: values.userName,
            UserLastName: values.UserLastName,
            montOfPay: values.montOfPay,
            date: values.date
          }

          dispatch(addCashPay(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push('/')
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
          <div className='mt-5 d-flex justify-content-center flex-column'>
            <div className='mb-4 d-flex justify-content-center'>
              <h2 className='text-center'>Agregar pagos en efectivo</h2>
            </div>
            <div className='d-flex justify-content-center'>
              <Form className='w-25' onSubmit={handleSubmit}>
                <Form.Item required label='Email del comprador'>
                  <Input
                    id='userEmail'
                    placeholder='Ingrese el e-mail de pago'
                    type='text'
                    required
                    value={values.userEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.userEmail && touched.userEmail
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.userEmail && touched.userEmail && (
                    <div className='inputFeedback'>{errors.userEmail}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Nombre del comprador'>
                  <Input
                    id='userName'
                    placeholder='ingrese el nombre completo'
                    type='text'
                    required
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.userName && touched.userName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.userName && touched.userName && (
                    <div className='inputFeedback'>{errors.userName}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Apellido del comprador'>
                  <Input
                    id='UserLastName'
                    placeholder='Ingresar el apellido completo'
                    type='text'
                    required
                    value={values.UserLastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.UserLastName && touched.UserLastName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.UserLastName && touched.UserLastName && (
                    <div className='inputFeedback'>{errors.UserLastName}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Monto del pago'>
                  <Input
                    id='montOfPay'
                    placeholder='Ingrese el monto ($)'
                    type='number'
                    required
                    value={values.montOfPay}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.montOfPay && touched.montOfPay
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.montOfPay && touched.montOfPay && (
                    <div className='inputFeedback'>{errors.montOfPay}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Fecha de pago'>
                  <Input
                    id='date'
                    placeholder='Ingrese la fecha de la operacion'
                    type='text'
                    required
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.date && touched.date
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.date && touched.date && (
                    <div className='inputFeedback'>{errors.date}</div>
                  )}
                </Form.Item>

                <div className='d-flex justify-content-center'>
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      type='primary'
                      disabled={isSubmitting}
                    >
                      Agregar
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default AddCashPays
