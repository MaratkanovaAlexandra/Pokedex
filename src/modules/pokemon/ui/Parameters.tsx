import React, { FC } from 'react'
import { Height } from 'assets/images/icons/Height'
import { Weight } from 'assets/images/icons/Weight'
import { capitalize } from 'lodash'
import styled from 'styled-components/native'

import { PokemonType } from 'src/types/pokemon'

const Parameter = styled.View<{ hasBorder: boolean }>`
  width: 91px;
  min-height: 48px;
  align-items: center;
  justify-content: center;

  ${({ hasBorder }) =>
    hasBorder
      ? `
      border-left-width: 1px;
      border-left-color: #e0e0e0;
      `
      : ''}
`

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`

const MovesWrapper = styled.View`
  justify-content: flex-start;
  margin-bottom: 4px;
`

const IconWrapper = styled.View`
  margin: 10px 8px 10px 0;
`
const BlackText = styled.Text`
  font-size: 10px;
  color: #212121;
  line-height: 16px;
  text-align: left;
`
const GrayText = styled.Text`
  font-size: 8px;
  color: #666666;
`

export const Parameters: FC<Partial<PokemonType>> = ({
  weight,
  height,
  moves,
}) => (
  <Flex>
    <Parameter hasBorder={false}>
      <Flex>
        <IconWrapper>
          <Weight />
        </IconWrapper>
        <BlackText>{(weight ?? 0) / 10} kg</BlackText>
      </Flex>
      <GrayText>Weight</GrayText>
    </Parameter>
    <Parameter hasBorder>
      <Flex>
        <IconWrapper>
          <Height />
        </IconWrapper>
        <BlackText>{(height ?? 0) / 10} m</BlackText>
      </Flex>
      <GrayText>Height</GrayText>
    </Parameter>
    <Parameter hasBorder>
      <MovesWrapper>
        {moves?.map((move) => (
          <BlackText key={move.ability?.name}>
            {capitalize(move.ability?.name)}
          </BlackText>
        ))}
      </MovesWrapper>
      <GrayText>Moves</GrayText>
    </Parameter>
  </Flex>
)
