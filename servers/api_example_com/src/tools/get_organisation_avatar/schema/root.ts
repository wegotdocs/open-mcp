import { z } from "zod"

export const inputParamsSchema = {
  "orgId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "fileHash": z.string(),
  "If-None-Match": z.string().optional()
}