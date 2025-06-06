import { z } from "zod"

export const inputParamsSchema = {
  "order_id": z.number().int().describe("The order ID."),
  "id": z.number().int().describe("Unique identifier for the resource."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional()
}