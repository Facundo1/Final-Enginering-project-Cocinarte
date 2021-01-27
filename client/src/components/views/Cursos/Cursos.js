import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { Card, Avatar, Col, Typography, Row } from 'antd'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'
const { Title } = Typography
const { Meta } = Card
function LandingPage() {
  const user = useSelector(state => state.user)

  let body
  const [Videos, setVideos] = useState([])
  /////
  useEffect(() => {
    axios.get('/api/video/getVideos').then(response => {
      if (response.data.success) {
        console.log(response.data.videos)
        setVideos(response.data.videos)
      } else {
        alert('Failed to get Videos')
      }
    })
  }, [])

  if (!user.userData || !user.userData.accountType) {
    body = (
      <div classname='mt-5'>
        <h3 className='text-center mt-5 text-danger font-weight-bold'>
          ESPERE.....
        </h3>
      </div>
    )
    return body
  } else if (user.userData && user.userData.accountType === 'Cuenta gratuita') {
    body = (
      <div classname='mt-5'>
        <h3 className='text-center mt-5 text-danger font-weight-bold'>
          Hazte premium para acceder a todos los beneficios de |Cocinarte|
        </h3>
      </div>
    )
    return body
  } else {
    const renderCards = Videos.map((video, index) => {
      var minutes = Math.floor(video.duration / 60)
      var seconds = Math.floor(video.duration - minutes * 60)
      console.log(video._id._id)

      return (
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: 'relative' }}>
            <a href={`/video/${video._id._id}`}>
              <img
                style={{ width: '100%' }}
                alt='thumbnail'
                src={`http://localhost:5000/${video.thumbnail}`}
              />
              <div
                className=' duration'
                style={{
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  margin: '4px',
                  color: '#fff',
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  opacity: 0.8,
                  padding: '2px 4px',
                  borderRadius: '2px',
                  letterSpacing: '0.5px',
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '12px'
                }}
              >
                <span>Ver más..</span>
              </div>
            </a>
          </div>
          <br />
          <Meta title={video.title} />
          <br />

          <span> {moment(video.createdAt).format('MM/DD/YYYY')} </span>
        </Col>
      )
    })

    return (
      <div style={{ width: '85%', margin: '3rem auto' }}>
        <Title level={2}> Cursos online </Title>
        <hr />

        <Row gutter={16}>{renderCards}</Row>
      </div>
    )
  }
}

export default LandingPage
