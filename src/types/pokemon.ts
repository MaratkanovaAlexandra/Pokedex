export type PokemonCardType = {
  id: number
  name: string
  types: Array<{
    type: {
      name: string
    }
  }>
  sprites: Array<{
    sprites: string
  }>
}

export type PokemonType = {
  id: number
  name: string
  weight: number
  height: number
  sprites: Array<{
    sprites: string
  }>
  stats: Array<{
    statLvl: number
    stat?: {
      name: string
    } | null
  }>
  types: Array<{
    type?: {
      name: string
    } | null
  }>
  moves: Array<{
    ability?: {
      name: string
    } | null
  }>
  specy: {
    texts: Array<{
      text: string
    }>
  } | null
}
