import { z } from "zod"

export const inputParamsSchema = {
  "defaultIssueTypeId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `defaultIssueTypeId` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/issueType/properties/issueTypeScheme/properties/defaultIssueTypeId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation</property-description>").optional(),
  "description": z.string().nullable().describe("The description of the issue type scheme").optional(),
  "issueTypeIds": z.array(z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation")).describe("The issue type IDs for the issue type scheme").optional(),
  "name": z.string().describe("The name of the issue type scheme").optional(),
  "pcri": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pcri` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/issueType/properties/issueTypeScheme/properties/pcri\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation</property-description>").optional()
}