import { useQuery } from '@apollo/client'

import { Get_Pokemon_By_IdDocument } from 'src/types/graphql'

export const useGetPokemonById = (id: number) => {
  const { loading, error, data } = useQuery(Get_Pokemon_By_IdDocument, {
    variables: {
      where: {
        id: {
          _eq: id,
        },
      },
    },
  })

  return [loading, error, data]
}
