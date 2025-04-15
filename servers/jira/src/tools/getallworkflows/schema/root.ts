import { z } from "zod"

export const inputParamsSchema = {
  "workflowName": z.string().describe("The name of the workflow to be returned. Only one workflow can be specified.").optional()
}