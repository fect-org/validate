import type { Rule, Rules, ValidateCallBack, ValidateOptions } from './interface'

declare class Proy {
  private rules: Map<string, Rule>
  constructor(descriptor: Rules)
  validate(source: Record<string, any>, options?: ValidateOptions, callback?: ValidateCallBack): Proy
  descriptor(rule: Rules): Proy
  asyncValidate(source, options: ValidateOptions, callback?: ValidateCallBack): Promise<Proy>
  produce(): void
}

export declare const proy: () => Proy
