import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sigmet",
  "toolDescription": "Returns a specific SIGMET/AIRMET",
  "baseUrl": "https://api.weather.gov",
  "path": "/aviation/sigmets/{atsu}/{date}/{time}",
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
      "atsu": "atsu",
      "date": "date",
      "time": "time"
    }
  },
  inputParamsSchema
}

export default tool