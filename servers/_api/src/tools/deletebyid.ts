import { z } from "zod"

export const toolName = `deletebyid`
export const toolDescription = `Soft delete workflow scenario by id`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/scenarios/{id}`
export const method = `delete`
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