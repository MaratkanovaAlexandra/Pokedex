import { Types } from 'src/types/enums'

export type TProps = {
  type?:
    | {
        name: string
      }
    | null
    | undefined
}

export const getColor = (types: TProps[]) => types[0]?.type?.name as Types
