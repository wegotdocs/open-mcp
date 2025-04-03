import { z } from "zod"

export const toolName = `restore_24`
export const toolDescription = `Restore a soft deleted team`
export const baseUrl = `/api`
export const path = `/v1/teams/restore`
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