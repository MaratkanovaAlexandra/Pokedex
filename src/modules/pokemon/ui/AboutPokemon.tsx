import React, { FC } from 'react'
import styled from 'styled-components/native'

import { MappedColors } from 'src/features/constants/commons'
import { getColor, TProps } from 'src/features/helpers/getColor'
import { colors } from 'src/theme/colors'
import { PokemonType } from 'src/types/pokemon'

import { Container } from './Container'
import { Parameters } from './Parameters'

const Descriptor = styled.Text`
  font-family: 'Poppins-Regular';
  width: 312px;
  font-size: 10px;
  line-height: 16px;
  color: ${colors.darkGray};
  margin: 0 auto;
`

const ParametersWrapper = styled.View`
  margin: 0 auto 16px;
`

export const AboutPokemon: FC<Partial<PokemonType>> = (props) => {
  const { specy, types } = props

  return (
    <Container
      color={MappedColors[getColor(types ?? ([] as TProps[]))]}
      title="About">
      <ParametersWrapper>
        <Parameters {...props} />
      </ParametersWrapper>
      <Descriptor>
        {specy?.texts[0].text
          .split('')
          .filter((i) => i !== '\n')
          .join('')}
      </Descriptor>
    </Container>
  )
}
