import React, { FC } from 'react'
import { WhiteArrow } from 'assets/images/icons/WhiteArrow'
import { capitalize } from 'lodash'
import styled from 'styled-components/native'

import { getId } from 'src/features/helpers/getId'
import { useNavigation } from 'src/navigation/routes'
import { Button } from 'src/ui/button'

const StyledHeader = styled.View`
  margin: 24px;
  height: 32px;

  flex-direction: row;
  align-items: center;
`

const TitleText = styled.Text`
  font-family: 'Poppins-Bold';
  color: #ffffff;
  font-size: 24px;
  margin-left: 16px;
  line-height: 32px;
`

const IdText = styled.Text`
  margin-left: auto;
  font-family: 'Poppins-Bold';
  color: #ffffff;
  font-size: 12px;
  line-height: 32px;
`

type PokemonHeaderType = {
  name: string
  id: number
}

export const Header: FC<PokemonHeaderType> = ({ name, id }) => {
  const navigation = useNavigation()

  return (
    <StyledHeader>
      <Button onPress={navigation.goBack}>
        <WhiteArrow />
      </Button>
      <TitleText>{capitalize(name)}</TitleText>
      <IdText>{getId(id)}</IdText>
    </StyledHeader>
  )
}
