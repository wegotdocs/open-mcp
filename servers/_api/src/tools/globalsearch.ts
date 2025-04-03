import { z } from "zod"

export const toolName = `globalsearch`
export const toolDescription = `Global search`
export const baseUrl = `/api`
export const path = `/v1/search/adc/global`
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