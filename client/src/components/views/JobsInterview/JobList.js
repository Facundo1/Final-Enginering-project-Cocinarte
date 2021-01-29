import React, { Component } from 'react'
import Job from './Job'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'

class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }
  render() {
    return (
      <>
        <div className='container py-5'>
          {/* title */}
          <div id='rowTitle'></div>
          <br></br>
          <br></br>
          {/* end of title */}
          <div id='rowRecipes'>
            {this.props.jobs &&
              this.props.jobs.map(job => <Job key={job._id} job={job} />)}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.filteredItems
})

export default connect(mapStateToProps, {
  fetchJobs
})(JobList)
