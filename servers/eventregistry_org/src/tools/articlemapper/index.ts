import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "articlemapper",
  "toolDescription": "Mapping of the article URLs to the internal article URIs",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/articleMapper",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "articleUrl": "articleUrl",
      "includeAllVersions": "includeAllVersions",
      "deep": "deep"
    }
  },
  inputParamsSchema
}

export default tool