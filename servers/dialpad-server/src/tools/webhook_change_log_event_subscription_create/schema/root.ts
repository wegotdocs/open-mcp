import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().nullable().describe("Whether or not the this change log event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully.").optional()
}