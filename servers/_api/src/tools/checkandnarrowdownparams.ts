import { z } from "zod"

export const toolName = `checkandnarrowdownparams`
export const toolDescription = `Check and narrow down the parameters.`
export const baseUrl = `/api`
export const path = `/v1/politics/conditions/configuration`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "condition",
    "resourceInfos"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "condition": z.string().optional(), "resourceInfos": z.array(z.object({ "displayName": z.string().optional(), "name": z.string(), "politicType": z.enum(["Method","Entity"]) })).optional() }).shape