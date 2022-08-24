import React, { FC } from 'react'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  padding: 0 20px;
  margin-top: 16px;
`

const Title = styled.Text<{ color?: string }>`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: ${({ color }) => color ?? '#000000'};
  margin: 0 auto 16px;
`

type PokemonContainerType = {
  title: string
  color?: string
}

export const Container: FC<PokemonContainerType> = ({
  title,
  color,
  children,
}) => (
  <StyledContainer>
    <Title color={color}>{title}</Title>
    {children}
  </StyledContainer>
)
