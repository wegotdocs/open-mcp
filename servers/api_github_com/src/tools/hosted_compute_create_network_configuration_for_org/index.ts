import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_create_network_configuration_for_org",
  "toolDescription": "Create a hosted compute network configuration for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-configurations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "compute_service": "compute_service",
      "network_settings_ids": "network_settings_ids"
    }
  },
  inputParamsSchema
}

export default tool