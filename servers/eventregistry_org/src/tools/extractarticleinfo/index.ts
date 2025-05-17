import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extractarticleinfo",
  "toolDescription": "Extract article information (title, body, authors, ...) from article URL",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/extractArticleInfo",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool