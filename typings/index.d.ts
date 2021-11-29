import type { Rule, Rules, ValidateCallBack, ValidateOptions } from './interface'

declare class Proy {
  private rules: Map<string, Rule>
  private proxies: Map<String, any>
  constructor(descriptor: Rules)
  validate(source: Record<string, any>, callback?: ValidateCallBack): Proy
  descriptor(rule: Rules): Proy
  // asyncValidate(source, callback?: ValidateCallBack): Promise<Proy>
  produce(): void
}

export declare const proy: () => Proy

export * from './interface'
