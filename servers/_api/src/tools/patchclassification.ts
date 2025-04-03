import { z } from "zod"

export const toolName = `patchclassification`
export const toolDescription = `Update a classification`
export const baseUrl = `/api`
export const path = `/v1/classifications/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the classification") }).shape