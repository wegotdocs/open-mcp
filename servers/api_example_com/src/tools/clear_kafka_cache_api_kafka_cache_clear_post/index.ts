import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_kafka_cache_api_kafka_cache_clear_post",
  "toolDescription": "Clear Kafka Cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/kafka/cache/clear",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool