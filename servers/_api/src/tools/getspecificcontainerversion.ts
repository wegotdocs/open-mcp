import { z } from "zod"

export const toolName = `getspecificcontainerversion`
export const toolDescription = `Get a version of the Container`
export const baseUrl = `/api`
export const path = `/v1/containers/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("Container Id"), "version": z.string().describe("Container version number in the form `major`.`minor`") }).shape