import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "location_products",
  "toolDescription": "Returns a list of valid text product types for a given issuance location",
  "baseUrl": "https://api.weather.gov",
  "path": "/products/locations/{locationId}/types",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool