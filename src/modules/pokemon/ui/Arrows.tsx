import React, { FC } from 'react'
import { ArrowLeft } from 'assets/images/icons/ArrowLeft'
import { ArrowRight } from 'assets/images/icons/ArrowRight'
import styled from 'styled-components/native'

import { Button } from 'src/ui/button'

const ArrowsContainer = styled.View<{ isjJustifyEnd: boolean }>`
  position: absolute;
  top: 193px;
  width: 100%;
  padding: 0 28px;
  flex-direction: row;
  ${({ isjJustifyEnd }) =>
    isjJustifyEnd
      ? 'justify-content: flex-end;'
      : 'justify-content: space-between;'}
`

type ArrowsType = {
  isShowLeft: boolean
  isShowRight: boolean
  onLeftPress: () => void
  onRightPress: () => void
}

export const Arrows: FC<ArrowsType> = (props) => {
  const { isShowLeft, isShowRight, onLeftPress, onRightPress } = props

  return (
    <ArrowsContainer isjJustifyEnd={!isShowLeft}>
      {isShowLeft && (
        <Button onPress={onLeftPress}>
          <ArrowLeft />
        </Button>
      )}
      {isShowRight && (
        <Button onPress={onRightPress}>
          <ArrowRight />
        </Button>
      )}
    </ArrowsContainer>
  )
}
