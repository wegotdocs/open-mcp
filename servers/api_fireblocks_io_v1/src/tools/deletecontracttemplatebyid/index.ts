import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecontracttemplatebyid",
  "toolDescription": "Delete a contract template by id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates/{contractTemplateId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "contractTemplateId": "contractTemplateId"
    }
  },
  inputParamsSchema
}

export default tool