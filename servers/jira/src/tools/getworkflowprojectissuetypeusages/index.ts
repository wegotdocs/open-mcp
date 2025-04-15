import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getworkflowprojectissuetypeusages",
  "toolDescription": "Get issue types in a project that are using a given workflow",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflow/{workflowId}/project/{projectId}/issueTypeUsages",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "workflowId": "workflowId",
      "projectId": "projectId"
    },
    "query": {
      "nextPageToken": "nextPageToken",
      "maxResults": "maxResults"
    }
  },
  inputParamsSchema
}

export default tool