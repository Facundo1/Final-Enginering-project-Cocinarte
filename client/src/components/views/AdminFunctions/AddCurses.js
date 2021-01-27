import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addCurse } from '../../../_actions/video_actions'
import { useDispatch } from 'react-redux'
import './style.css'
import { Form, Input, Button } from 'antd'

function AddVideos(props) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        privacy: 0,
        filePath: '',
        category: '',
        views: 0,
        duration: '',
        thumbnail: ''
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('El titulo es requerido'),
        description: Yup.string().required('la descripcion es requerida'),
        privacy: Yup.string().required(
          'ingrese la privacidad del video (0 publico - 1 privado)'
        ),
        filePath: Yup.string().required('Ingrese ruta del video'),
        thumbnail: Yup.string().required('Ingrese la ruta de la miniatura'),

        description: Yup.string().required(
          'Debe escribir la descripcion del video'
        ),
        category: Yup.string().required(
          'Debes ingresar una categoria del video'
        )
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            title: values.title,
            description: values.description,
            privacy: values.privacy,
            filePath: values.filePath,
            category: values.category,
            views: values.views,
            duration: values.duration,
            thumbnail: values.thumbnail
          }

          dispatch(addCurse(dataToSubmit)).then(response => {
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
              <h2 className='text-center'>Agregar Video</h2>
            </div>
            <div className='d-flex justify-content-center'>
              <Form className='w-25' onSubmit={handleSubmit}>
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

                <Form.Item required label='Ruta de video'>
                  <Input
                    id='filePath'
                    placeholder='Escribe la ruta del video'
                    type='text'
                    value={values.filePath}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.filePath && touched.filePath
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.filePath && touched.filePath && (
                    <div className='inputFeedback'>{errors.filePath}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Categoria'>
                  <Input
                    id='category'
                    placeholder='Escribe la categoria del alimento'
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

                <Form.Item required label='Duracion'>
                  <Input
                    id='duration'
                    placeholder='Escribe la duracion del archivo'
                    type='text'
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.duration && touched.duration
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.duration && touched.duration && (
                    <div className='inputFeedback'>{errors.duration}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Miniatura'>
                  <Input
                    id='thumbnail'
                    placeholder='Escribe la ruta de la miniatura'
                    type='text'
                    value={values.thumbnail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.thumbnail && touched.thumbnail
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.thumbnail && touched.thumbnail && (
                    <div className='inputFeedback'>{errors.thumbnail}</div>
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

export default AddVideos
