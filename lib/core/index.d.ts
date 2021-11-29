import type { Rules, ValidateCallBack, ValidateOptions } from '../types'

declare class Proy {
  private rules: Rules
  constructor(descriptor: Rules)
  validate(source: Record<string, any>, options?: ValidateOptions, callback?: ValidateCallBack): Proy
  descriptor(rule: Rules): Proy
  asyncValidate(source, options: ValidateOptions, callback?: ValidateCallBack): Promise<Proy>
  produce(): void
}

export declare const proy: () => Proy
