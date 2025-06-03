import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_containersecurity_policies",
  "toolDescription": "Create a Container Security policy",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/policies",
  "method": "post",
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
      "name": "name",
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