import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sigmetsbyatsubydate",
  "toolDescription": "Returns a list of SIGMET/AIRMETs for the specified ATSU for the specified date",
  "baseUrl": "https://api.weather.gov",
  "path": "/aviation/sigmets/{atsu}/{date}",
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
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool