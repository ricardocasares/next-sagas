import { ActionType, ClientReady, ServerReady } from "./types";

export const clientReady = (): ClientReady => ({
  type: ActionType.CLIENT_READY
});

export const serverReady = (): ServerReady => ({
  type: ActionType.SERVER_READY
});
