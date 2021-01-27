import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addRecipe } from '../../../_actions/recipe_actions'
import { useDispatch } from 'react-redux'
import './style.css'
import { Form, Input, Button } from 'antd'

function AddRecipes(props) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        photo: '',
        title: '',
        description: '',
        Steps: '',
        Ingredients: '',
        Category: ''
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.string().required('Una foto es requerida'),
        title: Yup.string().required('El titulo es requerido'),
        description: Yup.string().required('Descipcion requerida'),
        Steps: Yup.string().required('Ingrese los pasos de la receta'),
        Ingredients: Yup.string().required('Ingredientes necesarios'),
        Category: Yup.string().required('Categoria requerida')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            photo: values.photo,
            title: values.title,
            description: values.description,
            Steps: values.Steps,
            Ingredients: values.Ingredients,
            Category: values.Category
          }

          dispatch(addRecipe(dataToSubmit)).then(response => {
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
              <h2 className='text-center'>Agregar Receta</h2>
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

                <Form.Item required label='Titulo'>
                  <Input
                    id='title'
                    placeholder='Escribe el titulo de la receta'
                    type='text'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title && touched.title
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.title && touched.title && (
                    <div className='inputFeedback'>{errors.title}</div>
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

                <Form.Item required label='Pasos'>
                  <Input
                    id='Steps'
                    placeholder='Escribe los pasos de la receta'
                    type='text'
                    value={values.Steps}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Steps && touched.Steps
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.Steps && touched.Steps && (
                    <div className='inputFeedback'>{errors.Steps}</div>
                  )}
                </Form.Item>
                <Form.Item required label='Ingredientes'>
                  <Input
                    id='Ingredients'
                    placeholder='Escriba los ingredientes'
                    type='text'
                    value={values.Ingredients}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Ingredients && touched.Ingredients
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.Ingredients && touched.Ingredients && (
                    <div className='inputFeedback'>{errors.Ingredients}</div>
                  )}
                </Form.Item>
                <Form.Item required label='Categoria'>
                  <Input
                    id='Category'
                    placeholder='Escriba la categoria'
                    type='text'
                    value={values.Category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Category && touched.Category
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.Category && touched.Category && (
                    <div className='inputFeedback'>{errors.Category}</div>
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

export default AddRecipes
