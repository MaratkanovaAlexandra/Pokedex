import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { capitalize } from 'lodash'
import styled from 'styled-components/native'

import { MappedColors } from 'src/features/constants/commons'
import { getColor } from 'src/features/helpers/getColor'
import { getId } from 'src/features/helpers/getId'
import { getImage } from 'src/features/helpers/getImage'
import { Routes, useNavigation } from 'src/navigation/routes'
import { PokemonCardType } from 'src/types/pokemon'

// import { PokemonCardType } from '../types'

const PokemonContainer = styled.View<{ color?: string }>`
  height: 112px;
  width: 104px;
  border: 1px solid ${({ color }) => color ?? '#000000'};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  margin-right: 8px;
`

const PokemonID = styled.Text<{ color?: string }>`
  color: ${({ color }) => color ?? '#000000'};
  margin: 4px 8px 0;
  font-family: 'Poppins';
  font-size: 8px;
  text-align: right;
`

const PokemonImageWrapper = styled.View`
  height: 72px;
  width: 72px;
  margin: 0 auto;
`

const PokemonImage = styled.Image`
  flex: 1;
  height: 72px;
  width: 72px;
  margin: 0 auto;
`

const PokemonName = styled.Text<{ color?: string }>`
  color: rgb(255, 255, 255);
  text-align: center;
  background-color: ${({ color }) => color ?? '#000000'};
  font-family: 'Poppins';
  font-size: 10px;

  height: 24px;
  width: 100%;
  padding-top: 5px;
`

export const PokemonCard: FC<PokemonCardType> = (props) => {
  const { name, id, types, sprites } = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(Routes.PokemonScreen, { id })}>
      <PokemonContainer color={MappedColors[getColor(types)]}>
        <PokemonID color={MappedColors[getColor(types)]}>{getId(id)}</PokemonID>
        <PokemonImageWrapper>
          <PokemonImage source={{ uri: getImage(sprites) }} />
        </PokemonImageWrapper>
        <PokemonName color={MappedColors[getColor(types)]}>
          {capitalize(name)}
        </PokemonName>
      </PokemonContainer>
    </TouchableOpacity>
  )
}
