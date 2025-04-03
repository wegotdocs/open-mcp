import { z } from "zod"

export const toolName = `listpolicyresources`
export const toolDescription = `Get list of policy resources used in authoring a policy`
export const baseUrl = `/api`
export const path = `/v1/policies/resources`
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