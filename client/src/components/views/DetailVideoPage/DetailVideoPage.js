import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd'
import axios from 'axios'
import SideVideo from './Sections/SideVideo'
import Subscriber from './Sections/Subscriber'
import Comments from './Sections/Comments'
import LikeDislikes from './Sections/LikeDislikes'
function DetailVideoPage(props) {
  const videoId = props.match.params.videoId
  const [Video, setVideo] = useState([])
  const [CommentLists, setCommentLists] = useState([])

  const videoVariable = {
    videoId: Video._id
  }
  console.log(videoVariable)

  useEffect(() => {
    axios
      .post('http://localhost:5000/api/video/getVideo', videoVariable)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.video)
          setVideo(response.data.video)
        } else {
          alert('Failed to get video Info')
        }
      })
  })

  /* axios
      .post('http://localhost:5000/api/comment/getComments', videoVariable)
      .then(response => {
        if (response.data.success) {
          console.log('response.data.comments', response.data.comments)
          setCommentLists(response.data.comments)
        } else {
          alert('Failed to get video Info')
        }
      })
  }, [])

  const updateComment = newComment => {
    setCommentLists(CommentLists.concat(newComment))
  }

  if (Video.title) {
    */
  return (
    <Row>
      <Col lg={18} xs={24}>
        <div
          className='postPage'
          style={{ width: '100%', padding: '3rem 4em' }}
        >
          <span>{Video.title}</span>
          <br></br>
          <video
            style={{ width: '100%' }}
            src={`http://localhost:5000/${Video.filePath}`}
            controls
          ></video>
          <br></br>
          <span>{Video.description}</span>
        </div>
      </Col>
      <Col lg={6} xs={24}>
        <SideVideo />
      </Col>
    </Row>
  )
}

export default DetailVideoPage
