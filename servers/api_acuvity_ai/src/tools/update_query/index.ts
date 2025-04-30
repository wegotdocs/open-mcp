import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_query",
  "toolDescription": "Update a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queries/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "direction": "direction",
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