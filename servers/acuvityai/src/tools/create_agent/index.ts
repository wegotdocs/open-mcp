import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_agent",
  "toolDescription": "Creates a new agent.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agents",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "agentConfig": "agentConfig",
      "currentVersion": "currentVersion",
      "hostname": "hostname",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "isAPEXReachable": "isAPEXReachable",
      "isAPEXTrusted": "isAPEXTrusted",
      "managedCAState": "managedCAState",
      "managedInterfaces": "managedInterfaces",
      "namespace": "namespace",
      "ping": "ping",
      "principal": "principal",
      "start": "start",
      "status": "status",
      "systemProxyManagementState": "systemProxyManagementState"
    }
  },
  inputParamsSchema
}

export default tool