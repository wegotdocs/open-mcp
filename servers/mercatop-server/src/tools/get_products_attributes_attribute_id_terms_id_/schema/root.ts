import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "attribute_id": z.number().int().describe("Unique identifier for the attribute of the terms."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional()
}