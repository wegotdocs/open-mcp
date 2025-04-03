import { z } from "zod"

export const toolName = `triggerdatainsightjob`
export const toolDescription = `Trigger a existing Data Insight Report Job to run`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/trigger/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the event Subscription") }).shape