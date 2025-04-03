import { z } from "zod"

export const toolName = `createadcentityadditiontype`
export const toolDescription = `Create a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.string() }).shape