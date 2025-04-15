import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workspaces_getiampolicy",
  "toolDescription": "Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{resource}:getIamPolicy",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
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
      "resource": "resource"
    },
    "query": {
      "options.requestedPolicyVersion": "options.requestedPolicyVersion"
    }
  },
  inputParamsSchema
}

export default tool