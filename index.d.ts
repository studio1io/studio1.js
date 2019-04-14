export interface Studio1 {
  init: (companyId: string) => void
  identify: (externalId: string, params: IdentifyParams) => Promise<void>
  isIdentified: () => boolean
  startWalk: (walkId: string) => Promise<void>
  endWalk: () => Promise<void>
  reset: () => void
  on(eventName: string, listener: (...args: any[]) => void): void
  off(eventName: string, listener: (...args: any[]) => void): void
}

export interface IdentifyParams {
  name?: string | null
  email?: string | null
  signedUpAt?: string | null
  traits?: IdentifyParamsTraits
}

type IdentifyParamsTraits =
  | IdentifyParamsTraitsHash
  | IdentifyParamsTraitItem[]
  | null

interface IdentifyParamsTraitsHash {
  [key: string]: string | boolean | number
}

interface IdentifyParamsTraitItem {
  name: string
  value: string | boolean | number
  dataType?: IdentifyParamsAttributeDataType
}

type IdentifyParamsAttributeDataType =
  | 'string'
  | 'boolean'
  | 'integer'
  | 'decimal'
  | 'date'

export function loadStudio1(): Promise<Studio1>