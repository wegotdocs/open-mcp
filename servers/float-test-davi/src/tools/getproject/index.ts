import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getproject",
  "toolDescription": "Retrieve a single project.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/projects/{project_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool