import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'
import axios from 'axios'
class SingleJob extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
      total: 0,
      job: {},
      id,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      await this.props.fetchJobs()
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate() {
    if (!this.state.job.companyName && this.props.jobs) {
      const detailJob = this.props.jobs.find(
        x => x._id.toString() === this.state.id.toString()
      )

      if (detailJob) {
        this.setState({
          job: detailJob,
          loading: false
        })
      }
    }
  }

  render() {
    const job = this.state.job
    const id = this.state.job._id
    const netSalary = job.approximateSalary
    const ShowNetIncome = e => {
      e.preventDefault()
      const body = {
        netSalary
      }
      axios
        .post('http://localhost:5000/api/axiosJobs/jobCalculateSalary', body)
        .then(res => {
          if (res.data.success !== false) {
            this.setState({ total: res.data.data })
          } else {
            alert('No se pudieron obtener datos')
          }
        })
    }
    console.log(id)

    const JobEspecificationsLoading = () => (
      <div>
        <h2>Cargando Empleos...</h2>
      </div>
    )

    const JobEspecificationsView = () => (
      <div>
        <div>
          <div className='d-flex justify-content-center'>
            <h4 className='titleReceta rounded mt-3'>{job.companyName}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <img
              src={`http://localhost:5000/${job.photo}`}
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            />
          </div>
          <div></div>
          {/* info */}
          <div className='d-flex justify-content-center mt-4'>
            <h4>{job.description}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4 className='titleCategoria rounded'>
              {'Requisitos excluyentes'}
            </h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>{job.requirements}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4 className='titleCategoria rounded'>{'Tipo de trabajo'}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>{job.category}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4 className='titleCategoria rounded'>{'Email de contacto'}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>{job.contactMail}</h4>
          </div>

          <div className='mt-4 d-flex justify-content-center'>
            <button className='btn btn-info' onClick={ShowNetIncome}>
              Mostrar salario mensual ofrecido
            </button>
          </div>
          <div className='mt-3 d-flex justify-content-center'>
            <h4>
              {this.state.total !== 0 ? (
                <div>
                  {'$' + this.state.total} <br></br>
                  {
                    'Este monto representa el ingreso asegurado luego de haber sido descontados todos los impuestos y regulaciones inherentes a la ley impositiva anual de la Provincia de Santa Fe.'
                  }{' '}
                </div>
              ) : (
                ''
              )}
            </h4>
          </div>
          <div className='d-flex justify-content-center'>
            {
              <Link
                to={{
                  pathname: '/Postularse',
                  aboutProps: job
                }}
                id='btnVolver'
              >
                <button className='mt-4 btn btn-dark  text-white rounded h5'>
                  Quiero postularme
                </button>
              </Link>
            }
          </div>

          <div className='d-flex justify-content-center'>
            {
              <Link to='/Empleos' id='btnVolver'>
                <button className='mt-5 btn btn-info  text-white rounded h5'>
                  Volver
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    )

    //Container-Branch-View Pattern//
    if (this.state.loading) {
      return <JobEspecificationsLoading />
    }
    return <JobEspecificationsView />
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps, {
  fetchJobs
})(SingleJob)
