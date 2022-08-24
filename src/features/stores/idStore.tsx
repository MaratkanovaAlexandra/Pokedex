import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { PokemonCardType } from 'src/types/pokemon'

type IdContextType = {
  setArray: (newArray: Array<PokemonCardType>) => void
  getNext: (id: number) => number | null
  getPrev: (id: number) => number | null
}

const initialValue: IdContextType = {
  setArray: noop,
  getNext: () => null,
  getPrev: () => null,
}

const IdContext = createContext(initialValue)

interface Props {
  children: ReactNode
}

export const IdProvider = ({ children }: Props) => {
  const [idArray, setIdArray] = useState<Array<number>>([])

  const setArray = useCallback((newArray: Array<PokemonCardType>) => {
    setIdArray(newArray.map((i) => i.id))
  }, [])

  const getNext = useCallback(
    (id: number) => idArray[idArray.indexOf(id) + 1] ?? null,
    [idArray],
  )

  const getPrev = useCallback(
    (id: number) => idArray[idArray.indexOf(id) - 1] ?? null,
    [idArray],
  )

  const value = useMemo(
    () => ({ setArray, getNext, getPrev }),
    [setArray, getNext, getPrev],
  )

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>
}

export const useIdContext = () => useContext(IdContext)
