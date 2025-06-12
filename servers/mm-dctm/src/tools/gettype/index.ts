import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettype",
  "toolDescription": "Get the type",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/repositories/{repositoryName}/types/{type}",
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
      "type": "type"
    },
    "query": {
      "inherited": "inherited",
      "locale": "locale",
      "links": "links",
      "include-value-assist": "include-value-assist",
      "include-lifecycle": "include-lifecycle",
      "include-auditable-events": "include-auditable-events",
      "include-display-configs": "include-display-configs",
      "include-mapping-tables": "include-mapping-tables",
      "include-value-constraints": "include-value-constraints",
      "include-all": "include-all",
      "scope-config": "scope-config",
      "display-config": "display-config"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool