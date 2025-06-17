import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_susemanagercontroller_errata_details",
  "toolDescription": "Gets the details for an advisory",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/software_updates/errata_details/{advisory_name}",
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
    "path": {
      "advisory_name": "advisory_name"
    }
  },
  inputParamsSchema
}

export default tool