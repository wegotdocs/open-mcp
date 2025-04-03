import { z } from "zod"

export const toolName = `restore_7`
export const toolDescription = `Restore a soft deleted data model.`
export const baseUrl = `/api`
export const path = `/v1/dashboard/datamodels/restore`
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