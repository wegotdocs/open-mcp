import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_alert",
  "toolDescription": "Creates a new alert.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alerts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "alertDefinition": "alertDefinition",
      "alertDefinitionName": "alertDefinitionName",
      "alertEvents": "alertEvents",
      "counter": "counter",
      "createTime": "createTime",
      "end": "end",
      "namespace": "namespace",
      "start": "start",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool