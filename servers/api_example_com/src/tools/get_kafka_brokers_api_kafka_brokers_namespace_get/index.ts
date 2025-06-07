import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kafka_brokers_api_kafka_brokers_namespace_get",
  "toolDescription": "Get Kafka Brokers",
  "baseUrl": "https://api.example.com",
  "path": "/api/kafka/brokers/{namespace}",
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