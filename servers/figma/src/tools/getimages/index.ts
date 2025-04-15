import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getimages",
  "toolDescription": "Render images of file nodes",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/images/{file_key}",
  "method": "get",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "file_key": "file_key"
    },
    "query": {
      "ids": "ids",
      "version": "version",
      "scale": "scale",
      "format": "format",
      "svg_outline_text": "svg_outline_text",
      "svg_include_id": "svg_include_id",
      "svg_include_node_id": "svg_include_node_id",
      "svg_simplify_stroke": "svg_simplify_stroke",
      "contents_only": "contents_only",
      "use_absolute_bounds": "use_absolute_bounds"
    }
  },
  inputParamsSchema
}

export default tool