import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelatedsubjectsbypersonid",
  "toolDescription": "get person related subjects",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/persons/{person_id}/subjects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "person_id": "person_id"
    }
  },
  inputParamsSchema
}

export default tool