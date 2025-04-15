import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "placephoto",
  "toolDescription": "The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places datab",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/photo",
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
      "photo_reference": "photo_reference",
      "maxheight": "maxheight",
      "maxwidth": "maxwidth"
    }
  },
  inputParamsSchema
}

export default tool