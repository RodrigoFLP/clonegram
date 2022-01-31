import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) { 
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`

const renderProp = ({ loading, error, data }) => {
  if (!loading) {
    const { photo } = data
    return <PhotoCard {...photo} />
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
      <h1>Cargando</h1>
    </div>
  )
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
