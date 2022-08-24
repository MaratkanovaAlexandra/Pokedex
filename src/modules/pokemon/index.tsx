import React from 'react'
import { useRoute } from '@react-navigation/native'

import { useGetPokemonById } from 'src/features/hooks/useGetPokemonByID'

import { Loader } from '../Loader'
import { Pokemon } from './ui/Pokemon'

export const PokemonScreen = () => {
  const route = useRoute()
  const { id } = route.params as Readonly<{ id: number }>
  const [loading, error, data] = useGetPokemonById(id)

  return <>{loading ? <Loader /> : <Pokemon {...data.pokemon[0]} />}</>
}
