import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_get_air_quality_post",
  "toolDescription": "Get Air Quality",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/get_air_quality",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "location": "location"
    }
  },
  inputParamsSchema
}

export default tool