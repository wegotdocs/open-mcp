import { z } from "zod"

export const toolName = `getpermissionsforpolicies`
export const toolDescription = `Get permissions for a set of policies`
export const baseUrl = `/api`
export const path = `/v1/permissions/policies`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "ids": z.array(z.string().uuid()).describe("List of policy of ids").optional() }).shape