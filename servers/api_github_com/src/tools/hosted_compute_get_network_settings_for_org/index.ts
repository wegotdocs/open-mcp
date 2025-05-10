import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hosted_compute_get_network_settings_for_org",
  "toolDescription": "Get a hosted compute network settings resource for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/network-settings/{network_settings_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "network_settings_id": "network_settings_id"
    }
  },
  inputParamsSchema
}

export default tool