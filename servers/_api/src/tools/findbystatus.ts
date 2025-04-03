import { z } from "zod"

export const toolName = `findbystatus`
export const toolDescription = `Get a tasks of WorkflowInstance with 'status'`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/instances/checkTask/{status}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "status"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "status": z.string(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape