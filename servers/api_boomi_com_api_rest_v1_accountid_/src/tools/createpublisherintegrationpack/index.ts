import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpublisherintegrationpack",
  "toolDescription": "Creates a PublisherIntegrationPack object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/PublisherIntegrationPack",
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
      "Description": "Description",
      "PublisherPackagedComponents": "PublisherPackagedComponents",
      "id": "id",
      "installationType": "installationType",
      "name": "name",
      "operationType": "operationType"
    }
  },
  inputParamsSchema
}

export default tool