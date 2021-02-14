import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addJob } from '../../../_actions/jobs_actions'
import { useDispatch } from 'react-redux'
import './style.css'
import { Form, Input, Button } from 'antd'

function AddJobs(props) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        photo: '',
        companyName: '',
        description: '',
        requirements: '',
        contactMail: '',
        category: '',
        approximateSalary: 0
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.string().required('Una foto es requerida'),
        companyName: Yup.string().required('Nombre de la compañia requerido'),
        description: Yup.string().required('Descipcion requerida'),
        requirements: Yup.string().required(
          'Ingrese los rquisitos para el trabajo'
        ),
        contactMail: Yup.string().required(
          'Email de contacto de la empresa necesario'
        ),
        category: Yup.string().required('Categoria requerida')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            photo: values.photo,
            companyName: values.companyName,
            description: values.description,
            requirements: values.requirements,
            contactMail: values.contactMail,
            category: values.category,
            approximateSalary: values.approximateSalary
          }

          dispatch(addJob(dataToSubmit)).then(response => {
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
              <h2 className='text-center'>Agregar Empleo</h2>
            </div>
            <div className='d-flex justify-content-center'>
              <Form className='w-25' onSubmit={handleSubmit}>
                <Form.Item required label='Foto'>
                  <Input
                    id='photo'
                    placeholder='Escribe la ruta del archivo'
                    type='text'
                    value={values.photo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.photo && touched.photo
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.photo && touched.photo && (
                    <div className='inputFeedback'>{errors.photo}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Nombre'>
                  <Input
                    id='companyName'
                    placeholder='Escribe el titulo de la receta'
                    type='text'
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.companyName && touched.companyName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.companyName && touched.companyName && (
                    <div className='inputFeedback'>{errors.companyName}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Descripcion'>
                  <Input
                    id='description'
                    placeholder='Escribe la descripcion de la receta'
                    type='text'
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.description && touched.description
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.description && touched.description && (
                    <div className='inputFeedback'>{errors.description}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Requisitos'>
                  <Input
                    id='requirements'
                    placeholder='Escribe los requisitos del trabajo'
                    type='text'
                    value={values.requirements}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.requirements && touched.requirements
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.requirements && touched.requirements && (
                    <div className='inputFeedback'>{errors.requirements}</div>
                  )}
                </Form.Item>
                <Form.Item required label='Mail de contacto'>
                  <Input
                    id='contactMail'
                    placeholder='Escriba el mail de contacto'
                    type='text'
                    value={values.contactMail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.contactMail && touched.contactMail
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.contactMail && touched.contactMail && (
                    <div className='inputFeedback'>{errors.contactMail}</div>
                  )}
                </Form.Item>
                <Form.Item required label='Categoria'>
                  <Input
                    id='category'
                    placeholder='Escriba la categoria'
                    type='text'
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.category && touched.category
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.category && touched.category && (
                    <div className='inputFeedback'>{errors.category}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Salario'>
                  <Input
                    id='approximateSalary'
                    placeholder='Escriba el salario aproximado'
                    type='number'
                    value={values.approximateSalary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.approximateSalary && touched.approximateSalary
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.approximateSalary && touched.approximateSalary && (
                    <div className='inputFeedback'>
                      {errors.approximateSalary}
                    </div>
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

export default AddJobs
