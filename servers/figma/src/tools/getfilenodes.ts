import { z } from "zod"

export const toolName = `getfilenodes`
export const toolDescription = `Get file JSON for specific nodes`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/files/{file_key}/nodes`
export const method = `get`
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
  "query": [
    "ids",
    "version",
    "depth",
    "geometry",
    "plugin_data"
  ],
  "header": [],
  "path": [
    "file_key"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "file_key": z.string().describe("File to export JSON from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
  "ids": z.string().describe("A comma separated list of node IDs to retrieve and convert."),
  "version": z.string().describe("A specific version ID to get. Omitting this will get the current version of the file.").optional(),
  "depth": z.number().describe("Positive integer representing how deep into the node tree to traverse. For example, setting this to 1 will return only the children directly underneath the desired nodes. Not setting this parameter returns all nodes.\n\nNote: this parameter behaves differently from the same parameter in the `GET /v1/files/:key` endpoint. In this endpoint, the depth will be counted starting from the desired node rather than the document root node.").optional(),
  "geometry": z.string().describe("Set to \"paths\" to export vector data.").optional(),
  "plugin_data": z.string().describe("A comma separated list of plugin IDs and/or the string \"shared\". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties.").optional()
}