import { z } from "zod"

export const toolName = `getcatalogversion`
export const toolDescription = `Get version of metadata service`
export const baseUrl = `/api`
export const path = `/v1/system/version`
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