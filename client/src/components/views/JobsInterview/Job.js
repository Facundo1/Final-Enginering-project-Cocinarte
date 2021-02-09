import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJob } from '../../../_actions/jobs_actions'

//Container-Branch-View Pattern
class Job extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const job = this.props.job

    const JobEntity = () => (
      <div className='col-md-4' key={job._id}>
        <div className='mb-5 thumbnail'>
          <img
            src={`http://localhost:5000/${job.photo}`}
            alt='photo'
            width='100'
            height='200'
          />
          <p className='text-nowrap'>{job.companyName}</p>
          <Link to={`/Empleos/${job._id}`}>
            <button className='btn btn-info  text-black rounded h5'>
              Ver oferta
            </button>
          </Link>
          {this.props.user &&
          this.props.user.email === 'facundosa123@gmail.com' ? (
            <button
              className='btn btn-danger btn-xs'
              onClick={() => this.props.deleteJob(job._id)}
            >
              Eliminar
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    )
    //Container-Branch-View Pattern//
    return (
      <div className='listOfJobs'>
        <JobEntity />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  user: state.user.userData
})

export default connect(mapStateToProps, {
  deleteJob
})(Job)
