import { z } from "zod"

export const toolName = `validatecondition_1`
export const toolDescription = `Validate a given condition`
export const baseUrl = `/api`
export const path = `/v1/policies/validation/condition/{expression}`
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

export const inputParams = z.object({ "expression": z.string().describe("Expression of validating rule") }).shape