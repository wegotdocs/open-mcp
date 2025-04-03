import { z } from "zod"

export const toolName = `getcountofowned`
export const toolDescription = ``
export const baseUrl = `/api`
export const path = `/v1/teams/ownedCount`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "teamIds"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "teamIds": z.string() }).shape