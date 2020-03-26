import { Action } from "redux";

export enum ActionType {
  CLIENT_READY = "@module/app/CLIENT_READY",
  SERVER_READY = "@module/app/SERVER_READY"
}

export interface ClientReady extends Action<ActionType.CLIENT_READY> {}
export interface ServerReady extends Action<ActionType.SERVER_READY> {}
