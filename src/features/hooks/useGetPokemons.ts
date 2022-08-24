import { useQuery } from '@apollo/client'

import { Get_PokemonsDocument } from 'src/types/graphql'

export const useGetPokemons = (limit: number) => {
  const { loading, error, data } = useQuery(Get_PokemonsDocument, {
    variables: {
      limit,
      where: {
        pokemon_v2_pokemonspecy: {
          evolves_from_species_id: {
            _is_null: true,
          },
        },
      },
      orderBy: [
        {
          id: 'asc',
        },
      ],
    },
  })

  return [loading, error, data]
}
