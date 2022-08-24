import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

const LoaderWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Loader: FC = () => (
  <LoaderWrapper>
    <ActivityIndicator size="large" color="#5113999f" />
  </LoaderWrapper>
)
