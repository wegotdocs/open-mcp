import { z } from "zod"

export const toolName = `getspecificstorageserviceversion`
export const toolDescription = `Get a version of the storage service`
export const baseUrl = `/api`
export const path = `/v1/services/storageServices/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().describe("storage service Id"), "version": z.string().describe("storage service version number in the form `major`.`minor`") }).shape