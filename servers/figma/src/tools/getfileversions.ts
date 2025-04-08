import { z } from "zod"

export const toolName = `getfileversions`
export const toolDescription = `Get versions of a file`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/files/{file_key}/versions`
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
    "page_size",
    "before",
    "after"
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
  "file_key": z.string().describe("File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
  "page_size": z.number().lte(50).describe("The number of items returned in a page of the response. If not included, `page_size` is `30`.").optional(),
  "before": z.number().describe("A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response.").optional(),
  "after": z.number().describe("A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included.").optional()
}