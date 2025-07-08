import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cat_random_tag",
  "toolDescription": "Get random cat by tag",
  "baseUrl": "https://api.example.com",
  "path": "/cat/{tag}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tag": "tag"
    },
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