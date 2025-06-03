import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_containersecurity_compliancescanconfiguration",
  "toolDescription": "Update compliance scans configuration",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/complianceScanConfiguration",
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
      "scheduleScanEnabled": "scheduleScanEnabled",
      "exceptions": "exceptions",
      "benchmarkVersions": "benchmarkVersions",
      "frameworks": "frameworks"
    }
  },
  inputParamsSchema
}

export default tool