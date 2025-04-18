import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_delete_network_configuration_from_org",
  "toolDescription": "Delete a hosted compute network configuration from an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "network_configuration_id": "network_configuration_id"
    }
  },
  inputParamsSchema
}

export default tool