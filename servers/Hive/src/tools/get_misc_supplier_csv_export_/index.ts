import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_misc_supplier_csv_export_",
  "toolDescription": "misc supplier csv export",
  "baseUrl": "http://localhost:8000",
  "path": "/misc/supplier-csv-export/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool