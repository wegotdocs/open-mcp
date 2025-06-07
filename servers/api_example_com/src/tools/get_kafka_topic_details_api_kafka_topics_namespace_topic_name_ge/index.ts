import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kafka_topic_details_api_kafka_topics_namespace_topic_name_ge",
  "toolDescription": "Get Kafka Topic Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/kafka/topics/{namespace}/{topic_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "topic_name": "topic_name"
    }
  },
  inputParamsSchema
}

export default tool