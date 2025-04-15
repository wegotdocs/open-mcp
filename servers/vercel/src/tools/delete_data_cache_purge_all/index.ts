import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_data_cache_purge_all",
  "toolDescription": "",
  "baseUrl": "https://api.vercel.com",
  "path": "/data-cache/purge-all",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "projectIdOrName": "projectIdOrName"
    }
  },
  inputParamsSchema
}

export default tool