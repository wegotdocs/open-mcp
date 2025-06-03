import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecontractmodification",
  "toolDescription": "Delete contract modification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/contracts/modifications/{contract_modification_id}",
  "method": "delete",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id",
      "contract_modification_id": "contract_modification_id"
    }
  },
  inputParamsSchema
}

export default tool