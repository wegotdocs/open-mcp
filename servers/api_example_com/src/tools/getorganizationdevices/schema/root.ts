import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Organization identifier"),
  "pageSize": z.number().int().describe("Limit number of devices to return").optional(),
  "after": z.number().int().describe("Last Node ID from previous page").optional()
}