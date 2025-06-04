import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addlabelassociation",
  "toolDescription": "Add label association",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/labels/{LabelID}/{AssociationID}",
  "method": "post",
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