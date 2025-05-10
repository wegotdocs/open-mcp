import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_import",
  "toolDescription": "Sends an import request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/import",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "delete": "delete"
    },
    "body": {
      "AIDomains": "AIDomains",
      "APIAuthorizations": "APIAuthorizations",
      "PACConfigs": "PACConfigs",
      "accessPolicies": "accessPolicies",
      "agentConfigs": "agentConfigs",
      "alertDefinitions": "alertDefinitions",
      "apps": "apps",
      "contentPolicies": "contentPolicies",
      "customDataSets": "customDataSets",
      "customDataTypes": "customDataTypes",
      "extractors": "extractors",
      "ignoredDomains": "ignoredDomains",
      "label": "label",
      "orgSettings": "orgSettings",
      "providerTeams": "providerTeams",
      "providerTokens": "providerTokens",
      "providers": "providers",
      "proxyroundtrips": "proxyroundtrips",
      "sinks": "sinks",
      "teams": "teams",
      "visitedurls": "visitedurls",
      "webExtensionConfigs": "webExtensionConfigs"
    }
  },
  inputParamsSchema
}

export default tool