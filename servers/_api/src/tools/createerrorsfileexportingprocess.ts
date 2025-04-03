import { z } from "zod"

export const toolName = `createerrorsfileexportingprocess`
export const toolDescription = `Create errors file exporting process`
export const baseUrl = `/api`
export const path = `/v1/import/{importProcessId}/errors`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "importProcessId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "importProcessId": z.string().uuid() }).shape