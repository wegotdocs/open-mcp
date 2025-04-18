import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "name": z.string().describe("The name of the code security configuration. Must be unique within the organization.").optional(),
  "description": z.string().max(255).describe("A description of the code security configuration").optional(),
  "advanced_security": z.enum(["enabled","disabled","code_security","secret_protection"]).describe("The enablement status of GitHub Advanced Security features. `enabled` will enable both Code Security and Secret Protection features.").optional(),
  "dependency_graph": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependency Graph").optional(),
  "dependency_graph_autosubmit_action": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Automatic dependency submission").optional(),
  "dependency_graph_autosubmit_action_options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `dependency_graph_autosubmit_action_options` to the tool, first call the tool `expandSchema` with \"/properties/dependency_graph_autosubmit_action_options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Feature options for Automatic dependency submission</property-description>").optional(),
  "dependabot_alerts": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot alerts").optional(),
  "dependabot_security_updates": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot security updates").optional(),
  "code_scanning_default_setup": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning default setup").optional(),
  "code_scanning_default_setup_options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `code_scanning_default_setup_options` to the tool, first call the tool `expandSchema` with \"/properties/code_scanning_default_setup_options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Feature options for code scanning default setup</property-description>").optional(),
  "code_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning delegated alert dismissal").optional(),
  "secret_scanning": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning").optional(),
  "secret_scanning_push_protection": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning push protection").optional(),
  "secret_scanning_delegated_bypass": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated bypass").optional(),
  "secret_scanning_delegated_bypass_options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `secret_scanning_delegated_bypass_options` to the tool, first call the tool `expandSchema` with \"/properties/secret_scanning_delegated_bypass_options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Feature options for secret scanning delegated bypass</property-description>").optional(),
  "secret_scanning_validity_checks": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning validity checks").optional(),
  "secret_scanning_non_provider_patterns": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning non-provider patterns").optional(),
  "secret_scanning_generic_secrets": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Copilot secret scanning").optional(),
  "secret_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated alert dismissal").optional(),
  "private_vulnerability_reporting": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of private vulnerability reporting").optional(),
  "enforcement": z.enum(["enforced","unenforced"]).describe("The enforcement status for a security configuration").optional()
}