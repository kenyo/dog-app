import React from 'react';
import axios from 'axios'
const dogAPI = 'https://dog.ceo/api/breeds/list/all'

export default function Button(props) {
  const logDogs = x => console.log(x)

  axios.get(dogAPI)
    .then(({data}) => {
      const dogs = data.message
      props.setDogState(dogs)

      return dogs
    })
    .then(logDogs)

  return (
    <div>
      <button onClick={() => console.log('foo')}>{props.text}</button>
    </div>
  )
}
