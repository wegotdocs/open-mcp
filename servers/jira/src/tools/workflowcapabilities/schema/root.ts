import { z } from "zod"

export const inputParamsSchema = {
  "workflowId": z.string().optional(),
  "projectId": z.string().optional(),
  "issueTypeId": z.string().optional()
}