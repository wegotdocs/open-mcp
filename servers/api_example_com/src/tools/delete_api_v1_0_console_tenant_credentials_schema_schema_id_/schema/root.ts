import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "schema_id": z.string().describe("schema_id")
}