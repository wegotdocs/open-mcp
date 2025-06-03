import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_cam_alibabaaccounts",
  "toolDescription": "Add Alibaba Cloud account",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/cam/alibabaAccounts",
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
      "alibabaRegion": "alibabaRegion",
      "roleArn": "roleArn",
      "oidcProviderId": "oidcProviderId",
      "name": "name",
      "description": "description",
      "connectedSecurityServices": "connectedSecurityServices"
    }
  },
  inputParamsSchema
}

export default tool