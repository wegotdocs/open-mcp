import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfolderchilddocument",
  "toolDescription": "Create the folderChildDocument",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/repositories/{repositoryName}/folders/{folderId}/documents",
  "method": "post",
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
      "folderId": "folderId"
    },
    "query": {
      "require-dc-write": "require-dc-write",
      "network-location": "network-location",
      "format": "format",
      "content-length": "content-length",
      "async": "async",
      "all-primary": "all-primary",
      "modifier": "modifier",
      "content-charset": "content-charset",
      "content-count": "content-count",
      "require-ip-network-location": "require-ip-network-location",
      "require-checksum": "require-checksum"
    },
    "header": {
      "Accept": "Accept",
      "Content-Type": "Content-Type"
    }
  },
  inputParamsSchema
}

export default tool