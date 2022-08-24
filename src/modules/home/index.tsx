/* eslint-disable no-console */
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { INITIAL_CARDS } from 'src/features/constants/commons'
import { useGetPokemons } from 'src/features/hooks/useGetPokemons'
import { SortProvider } from 'src/features/stores/sortContext'
import { PokemonCardType } from 'src/types/pokemon'

import { Loader } from '../Loader'
import { Header } from './ui/Header'
import { PokemonList } from './ui/PokemonList'
import { SearchBar } from './ui/SearchBar'

export const HomeScreen = () => {
  const [search, setSearch] = useState('')
  const [loading, error, data] = useGetPokemons(INITIAL_CARDS)

  if (error) console.error(error)

  return (
    <View style={styles.characterScreen}>
      <SortProvider>
        <Header />
        <SearchBar
          placeholder="Procurar"
          search={search}
          setSearch={setSearch}
        />
        {loading ? (
          <Loader />
        ) : (
          <PokemonList
            data={data.pokemon.filter((p: PokemonCardType) =>
              p.name.includes(search.toLowerCase()),
            )}
          />
        )}
      </SortProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  characterScreen: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
