import React, { FC, useState } from 'react'
import { Cross } from 'assets/images/icons/Cross'
import { Search } from 'assets/images/icons/Search'
import styled from 'styled-components/native'

import { Button } from 'src/ui/button'

const SearchWrapper = styled.View<{ centered: boolean }>`
  width: 328px;
  height: 24px;
  margin: 8px auto 16px;
  border: 1px solid #e0e0e0;
  padding: 0 8px;
  border-radius: 8px;
  background-color: #ffffff;

  flex-direction: row;
  align-items: center;
  ${({ centered }) => (centered ? 'justify-content: center;' : '')}
`

const Placeholder = styled.Text`
  padding: 4px 0;
  font-size: 10px;
  color: #666666;
  margin-left: 8px;
`

const SearchInput = styled.TextInput`
  margin: 0 auto;
  padding: 4px 0;
  font-size: 10px;
  color: #212121;
  flex: 1;
  margin: 0 8px;
`

type SearchBarType = {
  search: string
  placeholder: string
  setSearch: (search: string) => void
}

export const SearchBar: FC<SearchBarType> = ({
  search,
  setSearch,
  placeholder,
}) => {
  const [pressed, setPressed] = useState(false)

  const handlePress = () => {
    setSearch('')
    setPressed(false)
  }

  return (
    <SearchWrapper centered={!pressed} onTouchStart={() => setPressed(true)}>
      <Search />
      {pressed ? (
        <>
          <SearchInput value={search} onChangeText={setSearch} />
          <Button onPress={handlePress}>
            <Cross />
          </Button>
        </>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </SearchWrapper>
  )
}
