import { z } from "zod"

export const inputParamsSchema = {
  "saveExecutionProgress": z.boolean().optional(),
  "saveManualExecutions": z.boolean().optional(),
  "saveDataErrorExecution": z.enum(["all","none"]).optional(),
  "saveDataSuccessExecution": z.enum(["all","none"]).optional(),
  "executionTimeout": z.number().optional(),
  "errorWorkflow": z.string().describe("The ID of the workflow that contains the error trigger node.").optional(),
  "timezone": z.string().optional(),
  "executionOrder": z.string().optional()
}