import { z } from "zod"

export const toolName = `addtestconnectionresult_5`
export const toolDescription = `Add test connection result`
export const baseUrl = `/api`
export const path = `/v1/services/pipelineServices/{id}/testConnectionResult`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "lastUpdatedAt",
    "status",
    "steps"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the service"), "lastUpdatedAt": z.number().int().optional(), "status": z.enum(["Successful","Failed","Running"]).optional(), "steps": z.array(z.object({ "errorLog": z.string().optional(), "mandatory": z.boolean(), "message": z.string().optional(), "name": z.string(), "passed": z.boolean() })) }).shape