import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "documentscreate",
  "toolDescription": "Create a document",
  "baseUrl": "https://app.getoutline.com/api",
  "path": "/documents.create",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "title": "title",
      "text": "text",
      "collectionId": "collectionId",
      "parentDocumentId": "parentDocumentId",
      "templateId": "templateId",
      "template": "template",
      "publish": "publish"
    }
  },
  inputParamsSchema
}

export default tool