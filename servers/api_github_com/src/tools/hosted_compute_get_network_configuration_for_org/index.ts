import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_get_network_configuration_for_org",
  "toolDescription": "Get a hosted compute network configuration for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-configurations/{network_configuration_id}",
  "method": "get",
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