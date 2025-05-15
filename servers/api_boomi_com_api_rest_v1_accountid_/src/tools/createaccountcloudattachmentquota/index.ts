import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createaccountcloudattachmentquota",
  "toolDescription": "Creates an AccountCloudAttachmentQuota object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountCloudAttachmentQuota",
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
    "body": {
      "accountId": "accountId",
      "cloudId": "cloudId",
      "id": "id",
      "maxAtomAttachment": "maxAtomAttachment"
    }
  },
  inputParamsSchema
}

export default tool