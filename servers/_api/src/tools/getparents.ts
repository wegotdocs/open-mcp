import { z } from "zod"

export const toolName = `getparents`
export const toolDescription = `Get parents of subject area`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/parents/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid() }).shape