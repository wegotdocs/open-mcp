import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesharedserverinformation",
  "toolDescription": "Modifies or updates a SharedServerInformation object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/SharedServerInformation/{id}",
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
      "apiType": "apiType",
      "atomId": "atomId",
      "auth": "auth",
      "authToken": "authToken",
      "checkForwardedHeaders": "checkForwardedHeaders",
      "externalHost": "externalHost",
      "externalHttpPort": "externalHttpPort",
      "externalHttpsPort": "externalHttpsPort",
      "httpPort": "httpPort",
      "httpsPort": "httpsPort",
      "internalHost": "internalHost",
      "maxThreads": "maxThreads",
      "minAuth": "minAuth",
      "overrideUrl": "overrideUrl",
      "sslCertificateId": "sslCertificateId",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool