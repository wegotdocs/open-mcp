import { z } from "zod"

export const inputParamsSchema = {
  "observableId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "attachmentId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "asZip": z.boolean().optional()
}