import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchsubjects",
  "toolDescription": "条目搜索",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/search/subjects",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset"
    },
    "body": {
      "keyword": "keyword",
      "sort": "sort",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool