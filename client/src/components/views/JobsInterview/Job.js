import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { deleteRecipe } from '../../../_actions/recipe_actions'

class Job extends Component {
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
        </div>
      </div>
    )

    return <div className='listOfJobs'>{jobItems}</div>
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps, {})(Job)
