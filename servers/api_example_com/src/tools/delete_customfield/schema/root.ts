import { z } from "zod"

export const inputParamsSchema = {
  "customFieldId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "force": z.boolean().optional()
}