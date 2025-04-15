import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "healthcheck",
  "toolDescription": "Healthcheck",
  "baseUrl": "https://api.epa.gov/lew",
  "path": "/v1/health",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "X-Api-Key": "X-Api-Key"
    }
  },
  inputParamsSchema
}

export default tool