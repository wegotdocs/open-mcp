import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "elevation",
  "toolDescription": "The Elevation API provides a simple interface to query locations on the earth for elevation data. Additionally, you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes. With the Elevation",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/elevation/json",
  "method": "get",
  "security": [
    {
      "key": "key",
      "value": "<mcp-env-var>KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "locations": "locations",
      "path": "path",
      "samples": "samples"
    }
  },
  inputParamsSchema
}

export default tool