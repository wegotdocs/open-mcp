import { z } from "zod"

export const toolName = `globalsearchfilters`
export const toolDescription = `Filter values for global search`
export const baseUrl = `/api`
export const path = `/v1/search/adc/global/filters`
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