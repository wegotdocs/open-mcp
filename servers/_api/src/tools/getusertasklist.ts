import { z } from "zod"

export const toolName = `getusertasklist`
export const toolDescription = `ADC Get user task list`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/user-tasks`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "userAndTeamNames",
    "workflowInstanceIds",
    "from",
    "size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "userAndTeamNames": z.string().describe("UserTask assignee list as comma separated values").optional(), "workflowInstanceIds": z.string().describe("Workflow Instance Id list as comma separated values").optional(), "from": z.number().int().describe("Pagination offset").optional(), "size": z.number().int().describe("Pagination limit").optional() }).shape