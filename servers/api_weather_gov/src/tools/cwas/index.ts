import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cwas",
  "toolDescription": "Returns a list of Center Weather Advisories from a CWSU",
  "baseUrl": "https://api.weather.gov",
  "path": "/aviation/cwsus/{cwsuId}/cwas",
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
      "cwsuId": "cwsuId"
    }
  },
  inputParamsSchema
}

export default tool