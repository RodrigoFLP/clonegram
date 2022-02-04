import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`query getFavs {
    favs {
        id
        categoryId
        src
        likes
        userId
    }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Ocurrio un error</p>
  const { favs } = data
  console.log(favs)

  return <ListOfFavs favs={favs} />
}

export const GetFavs = ({ children }) => {
  return (
    <Query query={GET_FAVS} fetchPolicy='network-only'>
      {renderProp}
    </Query>
  )
}
