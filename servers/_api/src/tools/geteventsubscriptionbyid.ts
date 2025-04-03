import { z } from "zod"

export const toolName = `geteventsubscriptionbyid`
export const toolDescription = `Get a event Subscription by ID`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the Event Subscription"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape