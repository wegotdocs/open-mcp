import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_metric",
  "toolDescription": "Creates a metric query.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/metrics",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "resultType": "resultType",
      "time": "time",
      "timeRelative": "timeRelative"
    }
  },
  inputParamsSchema
}

export default tool