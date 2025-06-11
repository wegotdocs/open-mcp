import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Organization identifier"),
  "locationId": z.number().int().describe("Location identifier")
}