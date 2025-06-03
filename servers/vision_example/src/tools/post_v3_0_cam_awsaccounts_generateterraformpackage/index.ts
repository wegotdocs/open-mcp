import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_cam_awsaccounts_generateterraformpackage",
  "toolDescription": "Generate AWS Terraform template",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/cam/awsAccounts/generateTerraformPackage",
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
      "awsRegion": "awsRegion",
      "features": "features",
      "awsAccountName": "awsAccountName",
      "awsAccountDescription": "awsAccountDescription",
      "connectedSecurityServices": "connectedSecurityServices"
    }
  },
  inputParamsSchema
}

export default tool