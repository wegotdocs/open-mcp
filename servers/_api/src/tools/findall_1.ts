import { z } from "zod"

export const toolName = `findall_1`
export const toolDescription = `scenarios find all`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/scenarios`
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