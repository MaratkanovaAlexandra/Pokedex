import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { BASE_URL } from './features/constants/commons'
import { IdProvider } from './features/stores/idStore'
import { AlertProvider } from './modules/alert-context'

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <IdProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </IdProvider>
      </AlertProvider>
    </ApolloProvider>
  )
}
