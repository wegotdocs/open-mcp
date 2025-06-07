import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_hive_cache_api_hive_metastore_cache_clear_post",
  "toolDescription": "Clear Hive Cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/cache/clear",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool