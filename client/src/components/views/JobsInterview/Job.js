import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJob } from '../../../_actions/jobs_actions'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //PopUp overlayState
      check: false,
      chek2: false
    }
  }
  render() {
    const job = this.props.job
    const jobItems = (
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
            <button className='btn btn-info  text-white rounded h5'>
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

    return <div className='listOfJobs'>{jobItems}</div>
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  user: state.user.userData
})

export default connect(mapStateToProps, {
  deleteJob
})(Job)
