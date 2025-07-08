import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cat_get_text",
  "toolDescription": "Get cat by id saying text",
  "baseUrl": "https://api.example.com",
  "path": "/cat/{id}/says/{text}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "text": "text"
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
      "json": "json",
      "font": "font",
      "fontSize": "fontSize",
      "fontColor": "fontColor",
      "fontBackground": "fontBackground"
    }
  },
  inputParamsSchema
}

export default tool