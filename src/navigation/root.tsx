import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAlertContext } from 'src/modules/alert-context'
import { HomeScreen } from 'src/modules/home'
import { PokemonScreen } from 'src/modules/pokemon'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'

const { Navigator, Screen } = createNativeStackNavigator()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Screen name={Routes.PokemonScreen} component={PokemonScreen} />
      </Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
