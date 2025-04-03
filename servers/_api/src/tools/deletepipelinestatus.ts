import { z } from "zod"

export const toolName = `deletepipelinestatus`
export const toolDescription = `Delete pipeline status`
export const baseUrl = `/api`
export const path = `/v1/pipelines/{fqn}/status/{timestamp}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "fqn",
    "timestamp"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the pipeline"), "timestamp": z.number().int().describe("Timestamp of the pipeline status") }).shape