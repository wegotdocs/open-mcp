import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_update_network_configuration_for_org",
  "toolDescription": "Update a hosted compute network configuration for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "network_configuration_id": "network_configuration_id"
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