export interface Studio1 {
  init: (companyId: string) => void
  identify: (externalId: string, params: IdentifyParams) => Promise<void>
  isIdentified: () => boolean
  startFlow: (flowId: string) => Promise<void>
  endWFlow: () => Promise<void>
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
  | 'datetime'

interface LoadStudio1Opts {
  url?: string
}

export function loadStudio1(opts?: LoadStudio1Opts): Promise<Studio1>
