import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_agentconfig",
  "toolDescription": "Creates a new agent configuration.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agentconfigs",
  "method": "post",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
  "paramsMap": {
    "body": {
      "DNSMonitorEnabled": "DNSMonitorEnabled",
      "DNSMonitorPolicy": "DNSMonitorPolicy",
      "ID": "ID",
      "allowedPauseInterval": "allowedPauseInterval",
      "createTime": "createTime",
      "description": "description",
      "disableManagedCA": "disableManagedCA",
      "disableSystemProxyManagement": "disableSystemProxyManagement",
      "disableURLDiscovery": "disableURLDiscovery",
      "enablePause": "enablePause",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "listeningPort": "listeningPort",
      "name": "name",
      "namespace": "namespace",
      "pacName": "pacName",
      "pingInterval": "pingInterval",
      "updateTime": "updateTime",
      "useDynamicPort": "useDynamicPort"
    }
  },
  inputParamsSchema
}

export default tool