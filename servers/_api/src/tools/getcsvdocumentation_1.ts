import { z } from "zod"

export const toolName = `getcsvdocumentation_1`
export const toolDescription = `Get CSV documentation for user import/export`
export const baseUrl = `/api`
export const path = `/v1/users/documentation/csv`
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