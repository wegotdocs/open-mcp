import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cat_random",
  "toolDescription": "Get a random cat",
  "baseUrl": "https://api.example.com",
  "path": "/cat",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "type": "type",
      "filter": "filter",
      "fit": "fit",
      "position": "position",
      "width": "width",
      "height": "height",
      "blur": "blur",
      "r": "r",
      "g": "g",
      "b": "b",
      "brightness": "brightness",
      "saturation": "saturation",
      "hue": "hue",
      "lightness": "lightness",
      "html": "html",
      "json": "json"
    }
  },
  inputParamsSchema
}

export default tool