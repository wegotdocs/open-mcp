import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchcharacters",
  "toolDescription": "角色搜索",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/search/characters",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset"
    },
    "body": {
      "keyword": "keyword",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool