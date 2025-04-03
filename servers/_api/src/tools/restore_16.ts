import { z } from "zod"

export const toolName = `restore_16`
export const toolDescription = `Restore a soft deleted database service`
export const baseUrl = `/api`
export const path = `/v1/services/databaseServices/restore`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid() }).shape