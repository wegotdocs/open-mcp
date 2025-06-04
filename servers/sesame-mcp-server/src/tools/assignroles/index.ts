import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignroles",
  "toolDescription": "Assign Role",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/roles/assignation",
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
      "roleId": "roleId",
      "employeeId": "employeeId",
      "entityAffectedId": "entityAffectedId"
    }
  },
  inputParamsSchema
}

export default tool