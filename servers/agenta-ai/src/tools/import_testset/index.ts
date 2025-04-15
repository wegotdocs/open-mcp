import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "import_testset",
  "toolDescription": "Import Testset",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/testsets/endpoint",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool