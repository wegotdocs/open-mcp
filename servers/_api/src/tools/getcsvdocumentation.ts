import { z } from "zod"

export const toolName = `getcsvdocumentation`
export const toolDescription = `Get CSV documentation for team import/export`
export const baseUrl = `/api`
export const path = `/v1/teams/documentation/csv`
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