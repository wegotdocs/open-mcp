import { z } from "zod"

export const toolName = `deleteeventsubscriptionbyname`
export const toolDescription = `Delete an Event Subscription by name`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/name/{name}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the Event Subscription") }).shape