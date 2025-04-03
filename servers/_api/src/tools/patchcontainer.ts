import { z } from "zod"

export const toolName = `patchcontainer`
export const toolDescription = `Update a Container`
export const baseUrl = `/api`
export const path = `/v1/containers/{id}`
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

export const inputParams = z.object({ "id": z.string().describe("Id of the Container") }).shape