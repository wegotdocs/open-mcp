import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_trace",
  "toolDescription": "send a trace request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/traces",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "end": "end",
      "endRelative": "endRelative",
      "namespace": "namespace",
      "result": "result",
      "start": "start",
      "startRelative": "startRelative",
      "traceID": "traceID"
    }
  },
  inputParamsSchema
}

export default tool