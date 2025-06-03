import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_cam_awsaccounts_generatecfntemplatelinks",
  "toolDescription": "Generate AWS CloudFormation template",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/cam/awsAccounts/generateCfnTemplateLinks",
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
      "templateAccountType": "templateAccountType",
      "awsAccountName": "awsAccountName",
      "awsAccountDescription": "awsAccountDescription",
      "connectedSecurityServices": "connectedSecurityServices",
      "customTags": "customTags"
    }
  },
  inputParamsSchema
}

export default tool