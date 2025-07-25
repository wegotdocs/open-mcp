import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagebyname",
  "toolDescription": "Get package (by name)",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_type}/{package_name}",
  "method": "get",
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
      "owner": "owner",
      "package_type": "package_type",
      "package_name": "package_name"
    }
  },
  inputParamsSchema
}

export default tool