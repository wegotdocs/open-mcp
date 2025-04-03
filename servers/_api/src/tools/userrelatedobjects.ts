import { z } from "zod"

export const toolName = `userrelatedobjects`
export const toolDescription = `Get related entities for user or team`
export const baseUrl = `/api`
export const path = `/v1/search/adc/user/related`
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