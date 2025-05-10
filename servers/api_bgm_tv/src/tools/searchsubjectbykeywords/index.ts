import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchsubjectbykeywords",
  "toolDescription": "条目搜索",
  "baseUrl": "https://api.bgm.tv",
  "path": "/search/subject/{keywords}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "keywords": "keywords"
    },
    "query": {
      "type": "type",
      "responseGroup": "responseGroup",
      "start": "start",
      "max_results": "max_results"
    }
  },
  inputParamsSchema
}

export default tool