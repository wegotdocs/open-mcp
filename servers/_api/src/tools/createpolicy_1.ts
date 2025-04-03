import { z } from "zod"

export const toolName = `createpolicy_1`
export const toolDescription = `Create a policy`
export const baseUrl = `/api`
export const path = `/v1/politics`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "condition",
    "description",
    "effect",
    "enabled",
    "name",
    "operations",
    "politicType",
    "resources",
    "value"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "condition": z.string().optional(), "description": z.string().optional(), "effect": z.enum(["Allow","Deny"]), "enabled": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "operations": z.array(z.enum(["Create","Read","Delete","Restore","Update","Publish","Follow","SetGlobalDefaultGlossary","DoNotAuthorizeMe"])), "politicType": z.enum(["Method","Entity"]), "resources": z.array(z.object({ "displayName": z.string().optional(), "name": z.string(), "politicType": z.enum(["Method","Entity"]) })), "value": z.array(z.string()).optional() }).shape