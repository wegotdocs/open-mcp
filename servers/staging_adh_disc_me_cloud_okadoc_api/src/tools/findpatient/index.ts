import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpatient",
  "toolDescription": "Find Patient",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/findPatient",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "document_type_id": "document_type_id",
      "patient_document_id": "patient_document_id",
      "mobile_number": "mobile_number",
      "birthday": "birthday"
    },
    "header": {
      "okadoc-auth-key": "okadoc-auth-key"
    }
  },
  inputParamsSchema
}

export default tool