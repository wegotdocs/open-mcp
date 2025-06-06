import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "order_id": z.number().int().describe("The order ID."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional()
}