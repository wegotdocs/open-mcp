import { z } from "zod"

export const toolName = `getattributefilters`
export const toolDescription = `Get data for user attribute filters`
export const baseUrl = `/api`
export const path = `/v1/search/adc/user/related/filters`
export const method = `post`
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