import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_containersecurity_policies_id_",
  "toolDescription": "Modify a Container Security policy",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/policies/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "description": "description",
      "default": "default",
      "namespaced": "namespaced",
      "runtime": "runtime",
      "xdrEnabled": "xdrEnabled",
      "malwareScan": "malwareScan",
      "secretScan": "secretScan"
    }
  },
  inputParamsSchema
}

export default tool