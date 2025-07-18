import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedata",
  "toolDescription": "Updates a single document information registry.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "Active": "Active",
      "DataStatusId": "DataStatusId",
      "Comments": "Comments",
      "File": "File",
      "ReturnSource": "ReturnSource"
    }
  },
  inputParamsSchema
}

export default tool