import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletelabelassociation",
  "toolDescription": "Delete label association",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/labels/{LabelID}/{AssociationID}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "LabelID": "LabelID",
      "AssociationID": "AssociationID"
    }
  },
  inputParamsSchema
}

export default tool