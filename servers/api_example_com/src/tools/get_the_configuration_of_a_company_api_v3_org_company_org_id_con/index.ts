import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_configuration_of_a_company_api_v3_org_company_org_id_con",
  "toolDescription": "[administrator] Get the configuration of a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}/conf",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool