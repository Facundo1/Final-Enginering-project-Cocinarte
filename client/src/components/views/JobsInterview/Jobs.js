import React, { Component } from 'react'
import JobList from './JobList'
import { connect } from 'react-redux'
import { fetchJobs } from '../../../_actions/jobs_actions'
import BeatLoader from 'react-spinners/BeatLoader'

class Jobs extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const JobsLoader = () => (
      <div className='d-flex justify-content-center mt-5 '>
        <BeatLoader
          className='d-flex justify-content-center'
          color={'black'}
          size={15}
        />
      </div>
    )
    const JobsFreeUser = () => (
      <div classname='mt-5'>
        <h3 className='text-center mt-5 text-danger font-weight-bold'>
          Hazte premium para acceder a todos los beneficios de |Cocinarte|
        </h3>
      </div>
    )

    //Container-Branch-View Pattern//
    if (!this.props.user || !this.props.user.accountType) {
      return <JobsLoader />
    }
    if (this.props.user && this.props.user.accountType === 'Cuenta gratuita') {
      return <JobsFreeUser />
    } else {
      return <JobList />
    }
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  user: state.user.userData
})

export default connect(mapStateToProps, {
  fetchJobs
})(Jobs)
