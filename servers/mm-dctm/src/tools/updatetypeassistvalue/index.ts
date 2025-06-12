import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetypeassistvalue",
  "toolDescription": "Update the typeAssistValue",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/repositories/{repositoryName}/types/{typeName}/assist-values",
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
      "typeName": "typeName"
    },
    "query": {
      "view": "view",
      "links": "links",
      "included-properties": "included-properties",
      "lifecycle-id": "lifecycle-id",
      "state": "state"
    },
    "header": {
      "Accept": "Accept",
      "Content-Type": "Content-Type"
    }
  },
  inputParamsSchema
}

export default tool