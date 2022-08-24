import React, { FC } from 'react'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { useSortContext } from 'src/features/stores/sortContext'
import { Button } from 'src/ui/button'

const Sort = styled.View`
  margin-left: auto;
  height: 16px;
`

const Content = styled.View`
  height: 16px;
  flex-direction: row;
`

const ASC = styled.Text`
  margin-right: 2px;
  height: 16px;
  line-height: 16px;
`

const Alphabet = styled.View`
  margin-right: 2px;
  height: 16px;
`
const SmallText = styled.Text`
  font-size: 8px;
  line-height: 8px;
  height: 8px;
`

export const SortButton: FC = () => {
  const { sort, toggleSort } = useSortContext()
  const asc = <ASC>#</ASC>
  const alphabet = (
    <Alphabet>
      <SmallText>A</SmallText>
      <SmallText>Z</SmallText>
    </Alphabet>
  )

  return (
    <Sort>
      <Button onPress={toggleSort}>
        <Content>
          {sort === 'alphabet' ? alphabet : asc}
          <Arrow />
        </Content>
      </Button>
    </Sort>
  )
}
