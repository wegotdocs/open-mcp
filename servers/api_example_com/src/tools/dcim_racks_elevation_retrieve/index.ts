import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_racks_elevation_retrieve",
  "toolDescription": "Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/racks/{id}/elevation/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "exclude": "exclude",
      "expand_devices": "expand_devices",
      "face": "face",
      "include_images": "include_images",
      "legend_width": "legend_width",
      "limit": "limit",
      "margin_width": "margin_width",
      "offset": "offset",
      "q": "q",
      "render": "render",
      "unit_height": "unit_height",
      "unit_width": "unit_width"
    }
  },
  inputParamsSchema
}

export default tool