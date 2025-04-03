import { z } from "zod"

export const toolName = `getspecificeventsubscriptionversion`
export const toolDescription = `Get a version of the Event Subscription`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the Event Subscription"), "version": z.string().describe("Event Subscription version number in the form `major`.`minor`") }).shape