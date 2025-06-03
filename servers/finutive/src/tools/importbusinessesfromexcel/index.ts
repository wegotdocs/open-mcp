import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importbusinessesfromexcel",
  "toolDescription": "Import businesses from Excel",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses-import",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "import_bank_account": "import_bank_account",
      "stakeholder_business": "stakeholder_business",
      "manager_all_business_email": "manager_all_business_email",
      "overwrite_type": "overwrite_type",
      "period_name_to_import_census_information": "period_name_to_import_census_information"
    }
  },
  inputParamsSchema
}

export default tool