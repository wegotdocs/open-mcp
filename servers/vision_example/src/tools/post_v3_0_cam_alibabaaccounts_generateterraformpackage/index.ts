import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_cam_alibabaaccounts_generateterraformpackage",
  "toolDescription": "Get Alibaba Cloud Terraform template",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/cam/alibabaAccounts/generateTerraformPackage",
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
      "cloudAccountName": "cloudAccountName",
      "cloudAccountDescription": "cloudAccountDescription",
      "alibabaRegion": "alibabaRegion",
      "connectedSecurityServices": "connectedSecurityServices"
    }
  },
  inputParamsSchema
}

export default tool