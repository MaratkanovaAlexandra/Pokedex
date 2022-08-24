/* eslint-disable no-nested-ternary */
import React, { FC, useEffect } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { useIdContext } from 'src/features/stores/idStore'
import { useSortContext } from 'src/features/stores/sortContext'
import { PokemonCardType } from 'src/types/pokemon'

import { PokemonCard } from './PokemonCard'

const List = styled.View`
  flex: 1;
  margin: 0 auto;
  width: 328px;
`

const sortFunction = (a: PokemonCardType, b: PokemonCardType) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0

type PokemonListType = {
  data: Array<PokemonCardType>
}

export const PokemonList: FC<PokemonListType> = ({ data }) => {
  const { sort } = useSortContext()
  const { setArray } = useIdContext()
  useEffect(() => setArray(data), [data, setArray])

  return (
    <List>
      <FlatList
        data={sort === 'alphabet' ? [...data].sort(sortFunction) : data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </List>
  )
}
