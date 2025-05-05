import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("Case id or number"),
  "alertIds": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")).describe("List of alert ids").optional()
}