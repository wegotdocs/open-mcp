import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateaccountcloudattachmentquota",
  "toolDescription": "Modifies or updates an AccountCloudAttachmentQuota object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountCloudAttachmentQuota/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "accountId": "accountId",
      "cloudId": "cloudId",
      "id": "b_id",
      "maxAtomAttachment": "maxAtomAttachment"
    }
  },
  inputParamsSchema
}

export default tool