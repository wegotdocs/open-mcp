import { z } from "zod"

export const toolName = `listpipelinestatuses`
export const toolDescription = `List pipeline status`
export const baseUrl = `/api`
export const path = `/v1/pipelines/{fqn}/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "startTs",
    "endTs"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the pipeline"), "startTs": z.number().describe("Filter pipeline statues after the given start timestamp"), "endTs": z.number().describe("Filter pipeline statues before the given end timestamp") }).shape