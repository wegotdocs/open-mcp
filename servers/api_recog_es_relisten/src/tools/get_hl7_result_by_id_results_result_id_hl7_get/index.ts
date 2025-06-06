import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hl7_result_by_id_results_result_id_hl7_get",
  "toolDescription": "Get HL7 result by ID",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/results/{result_id}/hl7",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "result_id": "result_id"
    }
  },
  inputParamsSchema
}

export default tool