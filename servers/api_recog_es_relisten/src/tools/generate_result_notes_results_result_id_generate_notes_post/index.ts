import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_result_notes_results_result_id_generate_notes_post",
  "toolDescription": "Generate Result Notes",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/results/{result_id}/generate-notes",
  "method": "post",
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
    },
    "body": {
      "lang": "lang",
      "langCult": "langCult",
      "specialty": "specialty",
      "subSpecialty": "subSpecialty",
      "subSubSpecialty": "subSubSpecialty",
      "isMulti": "isMulti",
      "consultationType": "consultationType",
      "userRole": "userRole"
    }
  },
  inputParamsSchema
}

export default tool