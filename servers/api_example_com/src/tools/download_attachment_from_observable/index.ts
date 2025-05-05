import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "download_attachment_from_observable",
  "toolDescription": "If query parameter `?asZip` is set, the attachment will be sent as a zip file with a password. Default password is 'malware'",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/observable/{observableId}/attachment/{attachmentId}/download",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "path": {
      "observableId": "observableId",
      "attachmentId": "attachmentId"
    },
    "query": {
      "asZip": "asZip"
    }
  },
  inputParamsSchema
}

export default tool