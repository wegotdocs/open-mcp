import { z } from "zod"

export const inputParamsSchema = {
  "connectionId": z.string().describe("Connection Id for streaming").optional(),
  "deploymentId": z.string().uuid().describe("Deploiment id of Model to be used in the conversation").optional(),
  "temperature": z.number().describe("Temperature from 0 to 1 for conversation").optional(),
  "maxTokens": z.number().int().describe("Limit of tokens for conversation").optional()
}