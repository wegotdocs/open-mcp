import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sigmetsbyatsu",
  "toolDescription": "Returns a list of SIGMET/AIRMETs for the specified ATSU",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/aviation/sigmets/{atsu}",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {
    "path": {
      "atsu": "atsu"
    }
  },
  inputParamsSchema
}

export default tool