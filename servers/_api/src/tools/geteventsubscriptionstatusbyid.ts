import { z } from "zod"

export const toolName = `geteventsubscriptionstatusbyid`
export const toolDescription = `Get Event Subscription status by Id`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/{eventSubscriptionId}/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "eventSubscriptionId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "eventSubscriptionId": z.string().uuid().describe("Name of the Event Subscription") }).shape