import { z } from "zod"

export const inputParamsSchema = {
  "roleToProjectActors": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `roleToProjectActors` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/role/properties/roleToProjectActors\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of role PCRI (can be ID or REF) to a list of user or group PCRI IDs to associate with the role and project.</property-description>").optional(),
  "roles": z.array(z.object({ "defaultActors": z.array(z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation")).describe("The default actors for the role. By adding default actors, the role will be added to any future projects created").optional(), "description": z.string().describe("The description of the role").optional(), "name": z.string().describe("The name of the role").optional(), "onConflict": z.enum(["FAIL","USE","NEW"]).describe("The strategy to use when there is a conflict with an existing project role. FAIL - Fail execution, this always needs to be unique; USE - Use the existing entity and ignore new entity parameters"), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "type": z.enum(["HIDDEN","VIEWABLE","EDITABLE"]).describe("The type of the role. Only used by project-scoped project").optional() }).strict().describe("The payload used to create a project role. It is optional for CMP projects, as a default role actor will be provided. TMP will add new role actors to the table.")).describe("The list of roles to create.").optional()
}