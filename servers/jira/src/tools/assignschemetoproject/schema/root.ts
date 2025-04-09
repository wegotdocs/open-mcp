import { z } from "zod"

export const inputParams = {
  "projectId": z.string().describe("The ID of the project."),
  "workflowSchemeId": z.string().describe("The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme.").optional()
}