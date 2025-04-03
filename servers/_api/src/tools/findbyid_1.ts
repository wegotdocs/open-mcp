import { z } from "zod"

export const toolName = `findbyid_1`
export const toolDescription = `scenarios find by Id`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/scenarios/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string() }).shape