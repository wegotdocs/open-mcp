import { z } from "zod"

export const toolName = `getspecificmetadataserviceversion`
export const toolDescription = `Get a version of the metadata service`
export const baseUrl = `/api`
export const path = `/v1/services/metadataServices/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the metadata service"), "version": z.string().describe("Metadata Service version number in the form `major`.`minor`") }).shape