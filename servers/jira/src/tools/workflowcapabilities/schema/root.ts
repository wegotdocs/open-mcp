import { z } from "zod"

export const inputParams = {
  "workflowId": z.string().optional(),
  "projectId": z.string().optional(),
  "issueTypeId": z.string().optional()
}