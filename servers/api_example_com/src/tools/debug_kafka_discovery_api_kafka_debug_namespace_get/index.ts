import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_kafka_discovery_api_kafka_debug_namespace_get",
  "toolDescription": "Debug Kafka Discovery",
  "baseUrl": "https://api.example.com",
  "path": "/api/kafka/debug/{namespace}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool