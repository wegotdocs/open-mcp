import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("TimeInterval ID"),
  "name": z.string().nullable().describe("The updated name of the time interval.").optional()
}