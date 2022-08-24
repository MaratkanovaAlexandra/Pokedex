import { Types } from 'src/types/enums'

export const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta'

export const MappedColors: Record<Types, string> = {
  [Types.NORMAL]: '#AAA67F',
  [Types.FIGHTING]: '#C12239',
  [Types.FLYING]: '#A891EC',
  [Types.POISON]: '#A43E9E',
  [Types.GROUND]: '#DEC16B',
  [Types.ROCK]: '#B69E31',
  [Types.BUG]: '#A7B723',
  [Types.GHOST]: '#70559B',
  [Types.STEEL]: '#B7B9D0',
  [Types.FIRE]: '#F57D31',
  [Types.WATER]: '#6493EB',
  [Types.GRASS]: '#74CB48',
  [Types.ELECTRIC]: '#F9CF30',
  [Types.PSYCHIC]: '#FB5584',
  [Types.ICE]: '#9AD6DF',
  [Types.DRAGON]: '#7037FF',
  [Types.DARK]: '#75574C',
  [Types.FAIRY]: '#E69EAC',
}

export const INITIAL_CARDS = 51
