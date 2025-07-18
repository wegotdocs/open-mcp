import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("EntityType Id"),
  "name": z.string().nullable().describe("The updated name of the entity type.").optional(),
  "priorityOrder": z.number().int().nullable().describe("The updated priority of the entity type. The higher the number, the higher the priority.").optional()
}