import { z } from "zod"

export const toolName = `post_menus_menuid_documents`
export const toolDescription = `add a document to the target menuId`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/menus/{menuId}/documents`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "menuId": z.string().describe("Id of the space") }).optional(), "body": z.object({ "Author": z.string().optional(), "Comment": z.string().optional(), "Date": z.string().optional(), "File": z.object({ "Content64Encoded": z.string().optional(), "Name": z.string().optional() }), "Title": z.string() }).optional() }).shape