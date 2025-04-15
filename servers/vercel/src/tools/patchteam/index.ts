import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patchteam",
  "toolDescription": "Update a Team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/teams/{teamId}",
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
    "path": {
      "teamId": "teamId"
    },
    "query": {
      "slug": "slug"
    },
    "body": {
      "avatar": "avatar",
      "description": "description",
      "emailDomain": "emailDomain",
      "name": "name",
      "previewDeploymentSuffix": "previewDeploymentSuffix",
      "regenerateInviteCode": "regenerateInviteCode",
      "saml": "saml",
      "slug": "b_slug",
      "enablePreviewFeedback": "enablePreviewFeedback",
      "enableProductionFeedback": "enableProductionFeedback",
      "sensitiveEnvironmentVariablePolicy": "sensitiveEnvironmentVariablePolicy",
      "remoteCaching": "remoteCaching",
      "hideIpAddresses": "hideIpAddresses",
      "hideIpAddressesInLogDrains": "hideIpAddressesInLogDrains"
    }
  },
  inputParamsSchema
}

export default tool