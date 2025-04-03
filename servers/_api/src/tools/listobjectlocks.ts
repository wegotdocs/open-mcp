import { z } from "zod"

export const toolName = `listobjectlocks`
export const toolDescription = `List of objects that are locked`
export const baseUrl = `/api`
export const path = `/v1/objects/lock`
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