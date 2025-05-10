import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_agentconfig",
  "toolDescription": "Update an agent configuration given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agentconfigs/{id}",
  "method": "put",
  "security": [],
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