import React, { FC } from 'react'
import styled from 'styled-components/native'

import { MappedColors } from 'src/features/constants/commons'
import { getColor, TProps } from 'src/features/helpers/getColor'
import { PokemonType } from 'src/types/pokemon'

import { Container } from './Container'
import { StatItem } from './StatItem'

const Flex = styled.View`
  flex-direction: row;
  margin: 0 auto;
`

const StatName = styled.Text<{ color?: string }>`
  font-family: 'Poppins-Bold';
  font-size: 10px;
  line-height: 16px;
  color: ${({ color }) => color ?? '#000000'};
`

const StatNameContainer = styled.View`
  align-items: flex-end;
  padding-right: 8px;
  border-right-width: 1px;
  border-right-color: #e0e0e0;
`

const StatsContainer = styled.View`
  padding-left: 12px;
`

export const Stats: FC<Partial<PokemonType>> = ({ types, stats }) => {
  const color = MappedColors[getColor(types ?? ([] as TProps[]))]

  return (
    <Container title="Base Stats" color={color}>
      <Flex>
        <StatNameContainer>
          <StatName color={color}>HP</StatName>
          <StatName color={color}>ATK</StatName>
          <StatName color={color}>DEF</StatName>
          <StatName color={color}>SATK</StatName>
          <StatName color={color}>SDEF</StatName>
          <StatName color={color}>SPD</StatName>
        </StatNameContainer>
        <StatsContainer>
          <StatItem
            color={color}
            stat={stats?.find((s) => s.stat?.name === 'hp')?.statLvl ?? 0}
          />
          <StatItem
            color={color}
            stat={stats?.find((s) => s.stat?.name === 'attack')?.statLvl ?? 0}
          />
          <StatItem
            color={color}
            stat={stats?.find((s) => s.stat?.name === 'defense')?.statLvl ?? 0}
          />
          <StatItem
            color={color}
            stat={
              stats?.find((s) => s.stat?.name === 'special-attack')?.statLvl ??
              0
            }
          />
          <StatItem
            color={color}
            stat={
              stats?.find((s) => s.stat?.name === 'special-defense')?.statLvl ??
              0
            }
          />
          <StatItem
            color={color}
            stat={stats?.find((s) => s.stat?.name === 'speed')?.statLvl ?? 0}
          />
        </StatsContainer>
      </Flex>
    </Container>
  )
}
