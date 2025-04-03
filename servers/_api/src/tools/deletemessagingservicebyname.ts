import { z } from "zod"

export const toolName = `deletemessagingservicebyname`
export const toolDescription = `Delete a messaging service by name`
export const baseUrl = `/api`
export const path = `/v1/services/messagingServices/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the messaging service"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape