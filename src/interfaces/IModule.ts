import { SDK } from "../sdk/sdk";

export const DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE = 30000;

export interface IModule {
  readonly sdk: SDK;
}