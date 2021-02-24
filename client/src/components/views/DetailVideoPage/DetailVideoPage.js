import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd'
import axios from 'axios'
import SideVideo from './Sections/SideVideo'

function DetailVideoPage(props) {
  const videoId = props.match.params.videoId
  const [Video, setVideo] = useState()

  const FetchVideos = () => {
    axios
      .post('http://localhost:5000/api/video/getVideo', { _id: videoId })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.video)
          setVideo(response.data.video)
        } else {
          alert('Failed to get video Info')
        }
      })
  }

  useEffect(() => {
    if (!Video) {
      FetchVideos()
    }
  }, [FetchVideos])

  return (
    <Row>
      <Col lg={18} xs={24}>
        <div
          className='postPage'
          style={{ width: '100%', padding: '3rem 4em' }}
        >
          <h3>
            <strong>{Video && Video.title}</strong>
          </h3>

          <br></br>
          <video
            style={{ width: '100%', padding: '-3rem 2em' }}
            src={Video && `http://localhost:5000/${Video.filePath}`}
            controls
          ></video>
          <br></br>
          <h3>
            <strong>{Video && Video.description}</strong>
          </h3>
        </div>
      </Col>
      <Col lg={6} xs={24}>
        <SideVideo />
      </Col>
    </Row>
  )
}

export default DetailVideoPage
