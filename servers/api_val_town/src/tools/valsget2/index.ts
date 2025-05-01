import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "valsget2",
  "toolDescription": "Get a val by id",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    }
  },
  inputParamsSchema
}

export default tool