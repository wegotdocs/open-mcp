import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetransfer",
  "toolDescription": "Update Transfer",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/transfer/{transferIdUrlParam}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "filesSize": "filesSize",
      "numOfFiles": "numOfFiles",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool