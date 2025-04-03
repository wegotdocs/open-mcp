import { z } from "zod"

export const toolName = `listallmlmodelversion`
export const toolDescription = `List ML model versions`
export const baseUrl = `/api`
export const path = `/v1/mlmodels/{id}/versions`
export const method = `get`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the ML Model") }).shape