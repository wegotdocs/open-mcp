import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_susemanagercontroller_patches_for_packages",
  "toolDescription": "Gets patches covered by package upgrades in SUSE Manager",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/software_updates/packages",
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
    "query": {
      "host_id": "host_id"
    }
  },
  inputParamsSchema
}

export default tool