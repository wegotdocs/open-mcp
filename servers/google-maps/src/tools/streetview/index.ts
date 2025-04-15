import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "streetview",
  "toolDescription": "The Street View Static API lets you embed a static (non-interactive) Street View panorama or thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL parameters sent through a standard HTTP request, and",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/streetview",
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
      "fov": "fov",
      "heading": "heading",
      "location": "location",
      "pano": "pano",
      "pitch": "pitch",
      "radius": "radius",
      "return_error_code": "return_error_code",
      "signature": "signature",
      "size": "size",
      "source": "source"
    }
  },
  inputParamsSchema
}

export default tool