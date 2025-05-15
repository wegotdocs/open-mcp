import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepublisherintegrationpack",
  "toolDescription": "Modifies or updates a PublisherIntegrationPack object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/PublisherIntegrationPack/{id}",
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
      "Description": "Description",
      "PublisherPackagedComponents": "PublisherPackagedComponents",
      "id": "b_id",
      "installationType": "installationType",
      "name": "name",
      "operationType": "operationType"
    }
  },
  inputParamsSchema
}

export default tool