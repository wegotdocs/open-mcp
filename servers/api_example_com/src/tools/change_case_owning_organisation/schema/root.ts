import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "organisation": z.string().describe("Id or name of the new organisation that should own the case"),
  "keepProfile": z.string().describe("Set a Profile to keep an access to the case, if none is set the current organisation will no longer have access to the case").optional(),
  "taskRule": z.string().min(1).max(128).optional(),
  "observableRule": z.string().min(1).max(128).optional()
}