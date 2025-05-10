import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_tracetagvalues",
  "toolDescription": "send a traces tag values request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/tracetagvalues",
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
      "start": "start",
      "startRelative": "startRelative",
      "tagKey": "tagKey"
    }
  },
  inputParamsSchema
}

export default tool