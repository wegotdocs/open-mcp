import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique ID for the resource.")
}