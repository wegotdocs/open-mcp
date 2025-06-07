import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kafka_topics_api_kafka_topics_namespace_get",
  "toolDescription": "Get Kafka Topics",
  "baseUrl": "https://api.example.com",
  "path": "/api/kafka/topics/{namespace}",
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