import React, { useEffect, useState } from 'react'
import { Typography, Popover, Button } from 'antd'
import axios from 'axios'
import './favorite.css'
import { useSelector } from 'react-redux'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config'
import { Link } from 'react-router-dom'

const { Title } = Typography

function FavoritePage() {
  const user = useSelector(state => state.user)

  const [Favorites, setFavorites] = useState([])
  const [Loading, setLoading] = useState(true)
  let variable = { userFrom: localStorage.getItem('userId') }

  useEffect(() => {
    fetchFavoredMovie()
  }, [])

  const fetchFavoredMovie = () => {
    axios.post('/api/favorite/getFavoredRecipe', variable).then(response => {
      if (response.data.success) {
        console.log(response.data.favorites)
        setFavorites(response.data.favorites)
        setLoading(false)
      } else {
        alert('Failed to get subscription videos')
      }
    })
  }

  const onClickDelete = (recipeId, userFrom) => {
    const variables = {
      recipeId: recipeId,
      userFrom: userFrom
    }

    axios.post('/api/favorite/removeFromFavorite', variables).then(response => {
      if (response.data.success) {
        fetchFavoredMovie()
      } else {
        alert('Failed to Remove From Favorite')
      }
    })
  }
  console.log('favorite mostrar', Favorites)
  const renderCards = Favorites.map((favorite, index) => {
    return (
      <tr key={index}>
        <Popover title={`${favorite.recipeTitle}`}>
          <div className=' d-flex justify-content-center mt-2 mb-2'>
            {favorite.recipePhoto ? (
              <img
                src={`http://localhost:5000/${favorite.recipePhoto}`}
                width='300'
                height='180'
              />
            ) : (
              'no image'
            )}
          </div>
        </Popover>

        <td className='text-center'>{favorite.recipeCategory}</td>
        <td>
          <div className='d-flex justify-content-center'>
            <button
              className='btn btn-info'
              onClick={() =>
                onClickDelete(favorite.recipeId, favorite.userFrom)
              }
            >
              {' '}
              Eliminar{' '}
            </button>
          </div>
        </td>
        <td>
          <div className='d-flex justify-content-center'>
            <Link to={`/Recetas/${favorite.recipeId}`}>
              <button className='btn btn-info  text-white rounded h5'>
                Detalles
              </button>
            </Link>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <div style={{ width: '85%', margin: '3rem auto' }}>
      <Title level={2}> Mis recetas favoritas </Title>
      <hr />
      {user.userData && !user.userData.isAuth ? (
        <div
          style={{
            width: '100%',
            fontSize: '2rem',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>Debes loguearte primero...</p>
          <a href='/login'>Ir al login</a>
        </div>
      ) : (
        !Loading && (
          <table className='ml-5'>
            <thead>
              <tr>
                <th>Nombre de la receta</th>
                <th>Categoria</th>
                <th>Remover de favoritos</th>
                <th>Ver Receta</th>
              </tr>
            </thead>
            <tbody>{renderCards}</tbody>
          </table>
        )
      )}
    </div>
  )
}

export default FavoritePage
