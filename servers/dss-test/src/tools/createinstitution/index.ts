import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinstitution",
  "toolDescription": "Create Institution",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/institution",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "Id": "Id",
      "LegacyId": "LegacyId",
      "Name": "Name",
      "Tenant": "Tenant"
    }
  },
  inputParamsSchema
}

export default tool