import { z } from "zod"

export const toolName = `postdevresources`
export const toolDescription = `Create dev resources`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/dev_resources`
export const method = `post`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  },
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
  "body": [
    "dev_resources"
  ]
}
export const flatMap = {}

export const inputParams = {
  "dev_resources": z.array(z.object({ "name": z.string().describe("The name of the dev resource."), "url": z.string().describe("The URL of the dev resource."), "file_key": z.string().describe("The file key where the dev resource belongs."), "node_id": z.string().describe("The target node to attach the dev resource to.") })).describe("An array of dev resources.")
}