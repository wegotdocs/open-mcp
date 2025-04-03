import { z } from "zod"

export const toolName = `validatecondition`
export const toolDescription = `Validate a given condition`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions/validation/condition/{expression}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "expression"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "expression": z.string().describe("Expression to validate") }).shape