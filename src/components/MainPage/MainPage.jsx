import React, { useEffect } from 'react'
import { fetchUserData } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function MainPage() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.app.user)
  const client_id = useSelector((state) => state.app.client_id)

  useEffect(() => {
    console.log('Use effect')
    dispatch(fetchUserData(client_id))
  }, [dispatch, client_id])

  if (!user) {
    return <h1>Информация недоступна</h1>
  }

  let keys = Object.keys(user)

  return (
    <div>
      {keys.map((item, index) => {
        if (user[item] && typeof user[item] === 'string') {
          return (
            <div key={index}>
              <span>{item}: </span>
              <span>{user[item]}: </span>
            </div>
          )
        }
      })}
    </div>
  )
}
