import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "streetviewmetadata",
  "toolDescription": "The Street View Static API metadata requests provide data about Street View panoramas. Using the metadata, you can find out if a Street View image is available at a given location, as well as getting programmatic access to the latitude and",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/streetview/metadata",
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