import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "organisations": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")).describe("Names or ids of the organisations").optional()
}