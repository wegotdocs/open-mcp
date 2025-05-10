import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_metricserie",
  "toolDescription": "Create a metric series request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/metricseries",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "end": "end",
      "endRelative": "endRelative",
      "limit": "limit",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool