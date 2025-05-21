import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Group ID"),
  "name": z.string().describe("Group name").optional(),
  "icon": z.string().describe("Group icon").optional()
}