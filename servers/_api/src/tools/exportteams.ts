import { z } from "zod"

export const toolName = `exportteams`
export const toolDescription = `Export teams in CSV format`
export const baseUrl = `/api`
export const path = `/v1/teams/name/{name}/export`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string() }).shape