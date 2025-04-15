import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().describe("The description of the security scheme").optional(),
  "name": z.string().describe("The name of the security scheme").optional(),
  "pcri": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pcri` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/security/properties/pcri\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation</property-description>").optional(),
  "securityLevels": z.array(z.object({ "description": z.string().describe("The description of the security level").optional(), "isDefault": z.union([z.literal(true), z.literal(false)]).describe("Whether the security level is default for the security scheme").optional(), "name": z.string().describe("The name of the security level").optional(), "securityLevelMembers": z.array(z.object({ "parameter": z.string().describe("Defines the value associated with the type. For reporter this would be \\{\"null\"\\}; for users this would be the names of specific users); for group this would be group names like \\{\"administrators\", \"jira-administrators\", \"jira-users\"\\}").optional(), "type": z.enum(["group","reporter","users"]).describe("The type of the security level member").optional() }).strict().describe("The payload for creating a security level member. See https://support.atlassian.com/jira-cloud-administration/docs/configure-issue-security-schemes/")).describe("The members of the security level").optional() }).strict().describe("The payload for creating a security level. See https://support.atlassian.com/jira-cloud-administration/docs/configure-issue-security-schemes/")).describe("The security levels for the security scheme").optional()
}