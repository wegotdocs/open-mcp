import { z } from "zod"

export const inputParamsSchema = {
  "entityId": z.string().uuid().describe("Id of user or group").optional(),
  "useCaseId": z.string().uuid().nullable().describe("UseCase id").optional(),
  "numberTokens": z.number().int().describe("Limit of tokens").optional(),
  "entityTypeId": z.number().int().describe("EntityType id").optional(),
  "timeIntervalId": z.number().int().describe("TimeInterval id").optional()
}