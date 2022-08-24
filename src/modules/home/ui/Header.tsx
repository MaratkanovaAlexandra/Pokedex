import React, { FC } from 'react'
import { Pokeball } from 'assets/images/icons/Pokeball'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { SortButton } from './SortButton'

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  height: 62px;
  padding: 24px 8px 0;
  width: 328px;
  margin: 0 auto;
`

const LogoText = styled.Text`
  font-size: 24px;
  margin-left: 16px;
  height: 100%;
  font-family: 'Poppins-Bold';
  color: ${colors.darkGray};
`

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Pokeball />
      <LogoText>Pokédex</LogoText>
      <SortButton />
    </StyledHeader>
  )
}
