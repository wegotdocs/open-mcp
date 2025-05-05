import { z } from "zod"

export const inputParamsSchema = {
  "templateId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "attachmentId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "If-None-Match": z.string().optional()
}