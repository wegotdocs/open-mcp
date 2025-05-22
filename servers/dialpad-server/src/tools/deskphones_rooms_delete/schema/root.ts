import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The desk phone's id."),
  "parent_id": z.number().int().describe("The room's id.")
}