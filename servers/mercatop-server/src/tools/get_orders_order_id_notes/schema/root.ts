import { z } from "zod"

export const inputParamsSchema = {
  "order_id": z.number().int().describe("The order ID."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional(),
  "type": z.enum(["any","customer","internal"]).describe("Limit result to customers or internal notes.").optional()
}