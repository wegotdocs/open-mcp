import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_alertdefinition",
  "toolDescription": "Creates a new alert definition.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alertdefinitions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "cooldown": "cooldown",
      "createTime": "createTime",
      "description": "description",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "message": "message",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "severity": "severity",
      "sinks": "sinks",
      "trigger": "trigger",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool