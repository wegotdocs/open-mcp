import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_authentication_flows_flowalias_executions",
  "toolDescription": "Update authentication executions of a Flow",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows/{flowAlias}/executions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "flowAlias": "flowAlias"
    },
    "body": {
      "id": "id",
      "requirement": "requirement",
      "displayName": "displayName",
      "alias": "alias",
      "description": "description",
      "requirementChoices": "requirementChoices",
      "configurable": "configurable",
      "authenticationFlow": "authenticationFlow",
      "providerId": "providerId",
      "authenticationConfig": "authenticationConfig",
      "flowId": "flowId",
      "level": "level",
      "index": "index",
      "priority": "priority"
    }
  },
  inputParamsSchema
}

export default tool