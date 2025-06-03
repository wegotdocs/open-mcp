import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_dmm_exceptions_id_",
  "toolDescription": "Update a custom exception",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/dmm/exceptions/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "targetEntities": "targetEntities",
      "event": "event",
      "criteria": "criteria"
    }
  },
  inputParamsSchema
}

export default tool