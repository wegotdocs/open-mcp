import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfederatedsearch",
  "toolDescription": "Execute simple search across repositories",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/search",
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
    "query": {
      "start": "start",
      "limit": "limit",
      "include-total": "include-total",
      "view": "view",
      "sort": "sort",
      "inline": "inline",
      "links": "links",
      "object-type": "object-type",
      "collections": "collections",
      "facet": "facet",
      "timezone": "timezone",
      "q": "q",
      "facet-value-constraints": "facet-value-constraints",
      "facet-id-constraints": "facet-id-constraints",
      "query-locale": "query-locale"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool