import { z } from "zod"

export const toolName = `get_recommendation_genres`
export const toolDescription = `Get Available Genre Seeds`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/recommendations/available-genre-seeds`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape