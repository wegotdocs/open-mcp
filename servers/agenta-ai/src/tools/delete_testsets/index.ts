import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_testsets",
  "toolDescription": "Delete Testsets",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/testsets",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "testset_ids": "testset_ids"
    }
  },
  inputParamsSchema
}

export default tool