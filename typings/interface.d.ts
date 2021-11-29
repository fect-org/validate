export type ValidateType = 'array' | 'number' | 'object' | 'string' | 'boolean'
export interface RuleItem {
  type?: ValidateType
  required?: boolean
  validate?: (val) => boolean
}

export type Rule = RuleItem | RuleItem[]

export type Rules = Record<string, Rule>

export interface ValidateOptions {
  block?: boolean
}

export interface CallbackErrors {
  field: string
  fieldValue: any
  type: ValidateType
  errLog: string
}

export type ValidateCallBack = (err?: CallbackErrors[], fields?: Record<string, any>) => void
