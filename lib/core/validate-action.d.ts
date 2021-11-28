import { Rules, ValidateCallBack } from "../types/index";

export declare const validateAction: (
  prop: string,
  value: any,
  rule: Rules,
  callback?: ValidateCallBack
) => boolean;
