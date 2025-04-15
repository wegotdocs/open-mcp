import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_identity_provider_instances_alias_",
  "toolDescription": "Update the identity provider",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "alias": "alias",
      "displayName": "displayName",
      "internalId": "internalId",
      "providerId": "providerId",
      "enabled": "enabled",
      "trustEmail": "trustEmail",
      "storeToken": "storeToken",
      "addReadTokenRoleOnCreate": "addReadTokenRoleOnCreate",
      "authenticateByDefault": "authenticateByDefault",
      "linkOnly": "linkOnly",
      "hideOnLogin": "hideOnLogin",
      "firstBrokerLoginFlowAlias": "firstBrokerLoginFlowAlias",
      "postBrokerLoginFlowAlias": "postBrokerLoginFlowAlias",
      "organizationId": "organizationId",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool