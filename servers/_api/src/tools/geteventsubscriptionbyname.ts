import { z } from "zod"

export const toolName = `geteventsubscriptionbyname`
export const toolDescription = `Get an Event Subscription by name`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/name/{eventSubscriptionName}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "eventSubscriptionName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "eventSubscriptionName": z.string().describe("Name of the Event Subscription"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape