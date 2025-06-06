import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the resource."),
  "context": z.enum(["view","edit"]).describe("Scope under which the request is made; determines fields present in response.").optional()
}