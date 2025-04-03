import { z } from "zod"

export const toolName = `listpolicyfunctions`
export const toolDescription = `Get list of policy functions used in authoring conditions in policy rules.`
export const baseUrl = `/api`
export const path = `/v1/policies/functions`
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