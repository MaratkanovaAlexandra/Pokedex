import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

type SortType = 'asc' | 'alphabet'

type SortContextType = {
  sort: SortType
  toggleSort: () => void
}

const initialValue: SortContextType = {
  sort: 'asc',
  toggleSort: noop,
}

const SortContext = createContext(initialValue)

interface Props {
  children: ReactNode
}

export const SortProvider = ({ children }: Props) => {
  const [sort, setSort] = useState<SortType>('asc')

  const toggleSort = useCallback(
    () => setSort(sort === 'asc' ? 'alphabet' : 'asc'),
    [sort],
  )

  const value = useMemo(() => ({ sort, toggleSort }), [sort, toggleSort])

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>
}

export const useSortContext = () => useContext(SortContext)
