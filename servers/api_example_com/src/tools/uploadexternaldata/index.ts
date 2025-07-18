import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadexternaldata",
  "toolDescription": "Receives external documents and processes them",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/external",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "UseCaseId": "UseCaseId",
      "ExternalId": "ExternalId",
      "FileName": "FileName",
      "LastUpdateDate": "LastUpdateDate",
      "FileContent": "FileContent",
      "ProcessInBulk": "ProcessInBulk"
    }
  },
  inputParamsSchema
}

export default tool