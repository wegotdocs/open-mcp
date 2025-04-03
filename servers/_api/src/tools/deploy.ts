import { z } from "zod"

export const toolName = `deploy`
export const toolDescription = `Deploy scenario to wms`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/scenarios`
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