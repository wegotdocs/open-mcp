import { z } from "zod"

export const toolName = `getspecifictopicversion`
export const toolDescription = `Get a version of the topic`
export const baseUrl = `/api`
export const path = `/v1/topics/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the topic"), "version": z.string().describe("Topic version number in the form `major`.`minor`") }).shape