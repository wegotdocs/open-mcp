import { z } from "zod"

export const toolName = `listeventsubscriptionresources`
export const toolDescription = `Get list of Event Subscriptions Resources used in filtering Event Subscription`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/resources`
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