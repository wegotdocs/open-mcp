import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the resource."),
  "context": z.literal("view").describe("Scope under which the request is made; determines fields present in response.").optional()
}