import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'

class SingleJob extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
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
    console.log(id)

    if (this.state.loading) {
      return (
        <div>
          <div>
            <div>
              <h2>Cargando Empleos...</h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <div className='d-flex justify-content-center'>
            <h3 className='titleReceta rounded mt-3'>
              <strong>{job.companyName}</strong>
            </h3>
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
            <h3>
              <strong>{job.description}</strong>
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <h3 className='titleCategoria rounded'>
              <strong>{'Requisitos excluyentes'}</strong>
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>
              <strong>{job.requirements}</strong>
            </h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h3 className='titleCategoria rounded'>
              <strong>{'Tipo de trabajo'}</strong>
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>
              <strong>{job.category}</strong>
            </h4>
          </div>
          <div className='d-flex justify-content-center'>
            {
              <Link to='/Postularse' id='btnVolver'>
                <button className='mt-5 btn btn-dark  text-white rounded h5'>
                  Postularse como candidato
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
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps, {
  fetchJobs
})(SingleJob)
