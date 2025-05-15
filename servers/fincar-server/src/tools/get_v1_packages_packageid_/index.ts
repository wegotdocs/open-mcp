import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_packages_packageid_",
  "toolDescription": "Show package details",
  "baseUrl": "https://api.fincar.com.au/sandbox",
  "path": "/v1/packages/{packageId}",
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
      "packageId": "packageId"
    }
  },
  inputParamsSchema
}

export default tool