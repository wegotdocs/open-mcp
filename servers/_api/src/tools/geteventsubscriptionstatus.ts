import { z } from "zod"

export const toolName = `geteventsubscriptionstatus`
export const toolDescription = `Get Event Subscription status`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/name/{eventSubscriptionName}/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "eventSubscriptionName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "eventSubscriptionName": z.string().describe("Name of the Event Subscription") }).shape