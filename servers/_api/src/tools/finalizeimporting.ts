import { z } from "zod"

export const toolName = `finalizeimporting`
export const toolDescription = `Try to commit entities from uploaded file`
export const baseUrl = `/api`
export const path = `/v1/import/{processId}/finalize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "processId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "processId": z.string().uuid() }).shape