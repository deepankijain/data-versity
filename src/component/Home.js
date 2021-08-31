import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [list, setList] = useState([])
  const getList = async () => {
    let res = await axios.get('https://ventureagro.herokuapp.com/api/getUsers')
    setList(res.data.data)
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <div>
      <ul>
        {list.map(({ _id, username }) => (
          <li key={_id}>{username}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
