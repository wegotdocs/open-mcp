import { z } from "zod"

export const toolName = `downloadbyid`
export const toolDescription = `download workflow scenario file by Id`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/scenarios/{id}/download`
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