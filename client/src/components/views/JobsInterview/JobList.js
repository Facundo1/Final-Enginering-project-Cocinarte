import React, { Component } from 'react'
import Job from './Job'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'
//Container-Branch-View Pattern
class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }
  render() {
    const JobListView = () => (
      <div>
        <div className='productImg rounded container mb-4 d-flex justify-content-center mt-5'>
          <h1 className='text-white'>Ofertas laborales</h1>
        </div>
        <div class='bg-1'>
          <h1 class='t-stroke t-shadow font-italic'>
            {' '}
            ¡Estas ofertas laborales son de tiempo limitado! no pierdas la
            oportunidad de desarrollarte en el campo de la gastronomia!
          </h1>
        </div>
        <div className='container py-5'>
          <div id='rowTitle'></div>
          <br></br>
          <br></br>

          <div id='rowRecipes'>
            {this.props.jobs &&
              this.props.jobs.map(job => <Job key={job._id} job={job} />)}
          </div>
        </div>
      </div>
    )
    //Container-Branch-View Pattern
    return <JobListView />
  }
}
//
const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps, {
  fetchJobs
})(JobList)
