import { z } from "zod"

export const inputParamsSchema = {
  "sessionId": z.string().describe("Identifier of the WebSocket session to close.")
}