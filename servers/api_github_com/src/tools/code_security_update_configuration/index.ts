import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_update_configuration",
  "toolDescription": "Update a code security configuration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/{configuration_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "configuration_id": "configuration_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "advanced_security": "advanced_security",
      "dependency_graph": "dependency_graph",
      "dependency_graph_autosubmit_action": "dependency_graph_autosubmit_action",
      "dependency_graph_autosubmit_action_options": "dependency_graph_autosubmit_action_options",
      "dependabot_alerts": "dependabot_alerts",
      "dependabot_security_updates": "dependabot_security_updates",
      "code_scanning_default_setup": "code_scanning_default_setup",
      "code_scanning_default_setup_options": "code_scanning_default_setup_options",
      "code_scanning_delegated_alert_dismissal": "code_scanning_delegated_alert_dismissal",
      "secret_scanning": "secret_scanning",
      "secret_scanning_push_protection": "secret_scanning_push_protection",
      "secret_scanning_delegated_bypass": "secret_scanning_delegated_bypass",
      "secret_scanning_delegated_bypass_options": "secret_scanning_delegated_bypass_options",
      "secret_scanning_validity_checks": "secret_scanning_validity_checks",
      "secret_scanning_non_provider_patterns": "secret_scanning_non_provider_patterns",
      "secret_scanning_generic_secrets": "secret_scanning_generic_secrets",
      "secret_scanning_delegated_alert_dismissal": "secret_scanning_delegated_alert_dismissal",
      "private_vulnerability_reporting": "private_vulnerability_reporting",
      "enforcement": "enforcement"
    }
  },
  inputParamsSchema
}

export default tool