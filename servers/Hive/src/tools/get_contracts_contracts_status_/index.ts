import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_contracts_contracts_status_",
  "toolDescription": "contracts contracts status",
  "baseUrl": "http://localhost:8000",
  "path": "/contracts/contracts_status/",
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
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool