import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_testset",
  "toolDescription": "Update Testset",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/testsets/{testset_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "testset_id": "testset_id"
    },
    "body": {
      "name": "name",
      "csvdata": "csvdata"
    }
  },
  inputParamsSchema
}

export default tool