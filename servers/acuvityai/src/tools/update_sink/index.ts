import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_sink",
  "toolDescription": "Updates the sink with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/sinks/{id}",
  "method": "put",
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