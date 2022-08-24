import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  PokemonScreen = 'PokemonScreen',
  MainNavigator = 'MainNavigator',
  HomeScreen = 'HomeScreen',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
