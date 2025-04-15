import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcomment",
  "toolDescription": "Add comment",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/comment",
  "method": "post",
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
      "issueIdOrKey": "issueIdOrKey"
    },
    "query": {
      "expand": "expand"
    },
    "body": {
      "author": "author",
      "body": "body",
      "created": "created",
      "id": "id",
      "jsdAuthorCanSeeRequest": "jsdAuthorCanSeeRequest",
      "jsdPublic": "jsdPublic",
      "properties": "properties",
      "renderedBody": "renderedBody",
      "self": "self",
      "updateAuthor": "updateAuthor",
      "updated": "updated",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool