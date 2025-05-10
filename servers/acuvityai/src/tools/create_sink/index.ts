import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_sink",
  "toolDescription": "Creates a new sink.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/sinks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "email": "email",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "pagerDuty": "pagerDuty",
      "propagate": "propagate",
      "slack": "slack",
      "splunk": "splunk",
      "type": "type",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool