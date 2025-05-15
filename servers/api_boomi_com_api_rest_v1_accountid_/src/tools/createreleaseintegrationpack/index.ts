import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createreleaseintegrationpack",
  "toolDescription": "Creates a ReleaseIntegrationPack object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ReleaseIntegrationPack",
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
      "ReleasePackagedComponents": "ReleasePackagedComponents",
      "id": "id",
      "installationType": "installationType",
      "name": "name",
      "releaseOnDate": "releaseOnDate",
      "releaseSchedule": "releaseSchedule",
      "releaseStatusUrl": "releaseStatusUrl",
      "requestId": "requestId"
    }
  },
  inputParamsSchema
}

export default tool