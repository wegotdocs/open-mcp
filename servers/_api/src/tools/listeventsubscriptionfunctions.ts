import { z } from "zod"

export const toolName = `listeventsubscriptionfunctions`
export const toolDescription = `Get list of Event Subscription functions used in filtering EventSubscription`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/functions`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape