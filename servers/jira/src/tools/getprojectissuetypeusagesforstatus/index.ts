import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectissuetypeusagesforstatus",
  "toolDescription": "Get issue type usages by status and project",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/statuses/{statusId}/project/{projectId}/issueTypeUsages",
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
      "statusId": "statusId",
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