import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Message ID to delete"),
  "hard": z.boolean().describe("Delete all message reactions and replies as well").optional(),
  "deleted_by": z.string().optional()
}