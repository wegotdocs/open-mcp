import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "caseReportTemplateId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "format": z.string()
}