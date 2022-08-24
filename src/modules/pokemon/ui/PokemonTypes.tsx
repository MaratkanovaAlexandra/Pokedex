import React, { FC } from 'react'
import styled from 'styled-components/native'

import { MappedColors } from 'src/features/constants/commons'
import { Types } from 'src/types/enums'
import { PokemonType } from 'src/types/pokemon'

const TypesContainer = styled.View`
  margin: 56px auto 0;
  flex-direction: row;
`

const TypeText = styled.Text<{ hasMargin: boolean; color?: string }>`
  font-family: 'Poppins-Bold';
  color: #ffffff;
  font-size: 10px;
  line-height: 16px;
  background-color: ${({ color }) => color ?? '#000000'};
  padding: 3px 8px 1px;
  border-radius: 10px;
  ${({ hasMargin }) => (hasMargin ? 'margin-left: 16px' : '')}
`

export const PokemonTypes: FC<Partial<PokemonType>> = ({ types }) => (
  <TypesContainer>
    {types?.map((t, i) => (
      <TypeText
        hasMargin={i !== 0}
        key={t?.type?.name}
        color={MappedColors[t?.type?.name as Types]}>
        {t?.type?.name}
      </TypeText>
    ))}
  </TypesContainer>
)
