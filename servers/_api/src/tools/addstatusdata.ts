import { z } from "zod"

export const toolName = `addstatusdata`
export const toolDescription = `Add status data`
export const baseUrl = `/api`
export const path = `/v1/pipelines/{fqn}/status`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": [
    "executionStatus",
    "taskStatus",
    "timestamp"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the pipeline"), "executionStatus": z.enum(["Successful","Failed","Pending"]).optional(), "taskStatus": z.array(z.object({ "endTime": z.number().int().optional(), "executionStatus": z.enum(["Successful","Failed","Pending"]), "logLink": z.string().url().optional(), "name": z.string(), "startTime": z.number().int().optional() })).optional(), "timestamp": z.number().int().optional() }).shape