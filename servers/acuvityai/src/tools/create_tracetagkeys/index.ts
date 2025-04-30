import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_tracetagkeys",
  "toolDescription": "send a traces tag keys request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/tracetagkeys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "end": "end",
      "endRelative": "endRelative",
      "limit": "limit",
      "maxStaleValues": "maxStaleValues",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "scope": "scope",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool