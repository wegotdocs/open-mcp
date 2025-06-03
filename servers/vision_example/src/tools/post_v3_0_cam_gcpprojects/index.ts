import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_cam_gcpprojects",
  "toolDescription": "Add Google Cloud project",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/cam/gcpProjects",
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
      "workloadIdentityPoolId": "workloadIdentityPoolId",
      "oidcProviderId": "oidcProviderId",
      "serviceAccountId": "serviceAccountId",
      "projectNumber": "projectNumber",
      "name": "name",
      "description": "description",
      "gcpRegion": "gcpRegion",
      "features": "features"
    }
  },
  inputParamsSchema
}

export default tool