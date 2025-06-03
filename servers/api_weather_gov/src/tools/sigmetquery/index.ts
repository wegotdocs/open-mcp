import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sigmetquery",
  "toolDescription": "Returns a list of SIGMET/AIRMETs",
  "baseUrl": "https://api.weather.gov",
  "path": "/aviation/sigmets",
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
    "query": {
      "start": "start",
      "end": "end",
      "date": "date",
      "atsu": "atsu",
      "sequence": "sequence"
    }
  },
  inputParamsSchema
}

export default tool