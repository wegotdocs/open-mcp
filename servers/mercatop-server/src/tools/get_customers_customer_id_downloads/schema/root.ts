import { z } from "zod"

export const inputParamsSchema = {
  "customer_id": z.number().int().describe("Unique identifier for the resource."),
  "context": z.literal("view").describe("Scope under which the request is made; determines fields present in response.").optional()
}