import React, { FC } from 'react'
import styled from 'styled-components/native'

const StatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 16px;
`

const StatShow = styled.View<{ color: string }>`
  width: 231px;
  height: 4px;
  background-color: ${({ color }) => color + '33'};
  border-radius: 4px;
  overflow: hidden;
  margin-left: 8px;
`

const StatBar = styled.View<{ color: string; width: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ color }) => color};
  width: ${({ width }) => width}px;
`

const StatText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #212121;
  font-size: 10px;
`

const addZero = (stat: number) =>
  `${'0'.repeat(3 - stat.toString().length)}${stat}`

export const StatItem: FC<{ stat: number; color: string }> = ({
  stat,
  color,
}) => {
  return (
    <StatContainer>
      <StatText>{addZero(stat)}</StatText>
      <StatShow color={color}>
        <StatBar color={color} width={stat} />
      </StatShow>
    </StatContainer>
  )
}
