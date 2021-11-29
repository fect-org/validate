export interface RuleItem {
  type?: string
  required?: boolean
  validate?: () => void
}

export type Rule = RuleItem | RuleItem[]

export type Rules = Record<string, Rule>

export interface ValidateErr {
  message?: string
  sourceValue?: any
  targetValue?: any
}

export interface ValidateOptions {
  block?: boolean
}

export type ValidateCallBack = (err: any, fields: any) => void
