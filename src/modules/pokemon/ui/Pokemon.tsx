import React, { FC } from 'react'
import styled from 'styled-components/native'

import { MappedColors } from 'src/features/constants/commons'
import { getColor } from 'src/features/helpers/getColor'
import { getImage } from 'src/features/helpers/getImage'
import { useIdContext } from 'src/features/stores/idStore'
import { Routes, useNavigation } from 'src/navigation/routes'
import { PokemonType } from 'src/types/pokemon'

import { AboutPokemon } from './AboutPokemon'
import { Arrows } from './Arrows'
import { Header } from './Header'
import { PokemonTypes } from './PokemonTypes'
import { Stats } from './Stats'

const StyledBackground = styled.View<{ color?: string }>`
  flex: 1;
  background-color: ${({ color }) => color ?? '#000000'};
`
const StyledImage = styled.Image`
  position: absolute;
  top: 8px;
  right: 8px;
`

const StyledPokemonImage = styled.Image`
  position: relative;
  height: 200px;
  width: 200px;
  margin: 0 auto;
`

const StyledContainer = styled.View`
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: 4px;
  top: 224px;
  border-radius: 8px;
  background-color: #fff;
`

export const Pokemon: FC<PokemonType> = (props) => {
  const { id, name, types, sprites } = props
  const { getNext, getPrev } = useIdContext()
  const navigation = useNavigation()

  const onLeftPress = () =>
    navigation.navigate(Routes.PokemonScreen, { id: getPrev(id) })

  const onRightPress = () =>
    navigation.navigate(Routes.PokemonScreen, { id: getNext(id) })

  return (
    <StyledBackground color={MappedColors[getColor(types)]}>
      <StyledImage source={require(`assets/images/pictures/Pokeball.png`)} />
      <Header name={name} id={id} />
      <Arrows
        isShowLeft={!!getPrev(id)}
        isShowRight={!!getNext(id)}
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
      />
      <StyledContainer>
        <PokemonTypes {...props} />
        <AboutPokemon {...props} />
        <Stats {...props} />
      </StyledContainer>
      <StyledPokemonImage source={{ uri: getImage(sprites) }} />
    </StyledBackground>
  )
}
