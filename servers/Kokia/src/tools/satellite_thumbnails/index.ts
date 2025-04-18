import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "satellite_thumbnails",
  "toolDescription": "Returns a thumbnail image for a satellite region. Image services in API are deprecated.",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/thumbnails/satellite/{area}",
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