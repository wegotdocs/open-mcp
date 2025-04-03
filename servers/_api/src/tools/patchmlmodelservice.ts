import { z } from "zod"

export const toolName = `patchmlmodelservice`
export const toolDescription = `Update an ML model service`
export const baseUrl = `/api`
export const path = `/v1/services/mlmodelServices/{id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the ML Model service") }).shape