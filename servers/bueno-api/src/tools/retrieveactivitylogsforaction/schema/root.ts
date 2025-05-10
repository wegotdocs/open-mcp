import { z } from "zod"

export const inputParamsSchema = {
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "actionId": z.number().int().describe("Numeric identifier of an Action within an Organisation")
}