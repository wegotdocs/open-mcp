import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontent",
  "toolDescription": "Get the content",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/repositories/{repositoryName}/objects/{id}/contents/content",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "DOCUMENTUM-CLIENT-TOKEN",
      "value": "<mcp-env-var>DOCUMENTUM_CLIENT_TOKEN</mcp-env-var>",
      "in": "cookie",
      "envVarName": "DOCUMENTUM_CLIENT_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "repositoryName": "repositoryName",
      "id": "id"
    },
    "query": {
      "format": "format",
      "page": "page",
      "modifier": "modifier",
      "links": "links",
      "media-url-policy": "media-url-policy",
      "network-location": "network-location",
      "require-checksum": "require-checksum"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool