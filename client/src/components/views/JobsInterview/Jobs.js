import React, { Component } from 'react'
import JobList from './JobList'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'

class Jobs extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }
  render() {
    return (
      <>
        <JobList />)
      </>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
})

export default connect(mapStateToProps, {
  fetchJobs
})(Jobs)
