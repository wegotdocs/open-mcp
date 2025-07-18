import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().nullable().describe("The name of the entity type.").optional(),
  "priorityOrder": z.number().int().describe("The priority of the entity type. The higher the number, the higher the priority.").optional()
}