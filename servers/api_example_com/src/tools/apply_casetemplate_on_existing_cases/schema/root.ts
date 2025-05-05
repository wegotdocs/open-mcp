import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")),
  "caseTemplate": z.string().describe("Id or name of the CaseTemplate to apply"),
  "updateTitlePrefix": z.boolean().optional(),
  "updateDescription": z.boolean().optional(),
  "updateTags": z.boolean().optional(),
  "updateSeverity": z.boolean().optional(),
  "updateFlag": z.boolean().optional(),
  "updateTlp": z.boolean().optional(),
  "updatePap": z.boolean().optional(),
  "updateCustomFields": z.boolean().optional(),
  "importTasks": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")).describe("Define which tasks to import in the case").optional(),
  "importPages": z.array(z.string()).describe("Define which pages to import in the case").optional()
}