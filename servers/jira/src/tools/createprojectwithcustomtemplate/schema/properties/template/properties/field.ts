import { z } from "zod"

export const inputParamsSchema = {
  "customFieldDefinitions": z.array(z.object({ "cfType": z.string().describe("The type of the custom field").optional(), "description": z.string().describe("The description of the custom field").optional(), "name": z.string().describe("The name of the custom field").optional(), "onConflict": z.enum(["FAIL","USE","NEW"]).describe("The strategy to use when there is a conflict with an existing custom field. FAIL - Fail execution, this always needs to be unique; USE - Use the existing entity and ignore new entity parameters").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "searcherKey": z.string().describe("The searcher key of the custom field").optional() }).strict().nullable().describe("Defines the payload for the custom field definitions. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/\\#api-rest-api-3-field-post")).nullable().describe("The custom field definitions. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/\\#api-rest-api-3-field-post").optional(),
  "fieldLayoutScheme": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fieldLayoutScheme` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/field/properties/fieldLayoutScheme\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines the payload for the field layout schemes. See \"Field Configuration Scheme\" - https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/\\#api-rest-api-3-fieldconfigurationscheme-post https://support.atlassian.com/jira-cloud-administration/docs/configure-a-field-configuration-scheme/</property-description>").optional(),
  "fieldLayouts": z.array(z.object({ "configuration": z.array(z.object({ "field": z.boolean().describe("Whether to show the field").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "required": z.boolean().describe("Whether the field is required").optional() }).strict().describe("Defines the payload for the field layout configuration. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/\\#api-rest-api-3-fieldconfiguration-post")).describe("The field layout configuration. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/\\#api-rest-api-3-fieldconfiguration-post").optional(), "description": z.string().describe("The description of the field layout").optional(), "name": z.string().describe("The name of the field layout").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional() }).strict().nullable().describe("Defines the payload for the field layouts. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/\\#api-group-issue-field-configurations\" + fieldlayout is what users would see as \"Field Configuration\" in Jira's UI - https://support.atlassian.com/jira-cloud-administration/docs/manage-issue-field-configurations/")).nullable().describe("The field layouts configuration.").optional(),
  "issueLayouts": z.array(z.object({ "containerId": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "issueLayoutType": z.enum(["ISSUE_VIEW","ISSUE_CREATE","REQUEST_FORM"]).describe("The issue layout type").optional(), "items": z.array(z.object({ "itemKey": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "sectionType": z.enum(["content","primaryContext","secondaryContext"]).describe("The item section type").optional(), "type": z.literal("FIELD").describe("The item type. Currently only support FIELD").optional() }).strict().describe("Defines the payload to configure the issue layout item for a project.")).describe("The configuration of items in the issue layout").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional() }).strict().nullable().describe("Defines the payload to configure the issue layouts for a project.")).nullable().describe("The issue layouts configuration").optional(),
  "issueTypeScreenScheme": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `issueTypeScreenScheme` to the tool, first call the tool `expandSchema` with \"/properties/template/properties/field/properties/issueTypeScreenScheme\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines the payload for the issue type screen schemes. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-screen-schemes/\\#api-rest-api-3-issuetypescreenscheme-post</property-description>").optional(),
  "screenScheme": z.array(z.object({ "defaultScreen": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "description": z.string().describe("The description of the screen scheme").optional(), "name": z.string().describe("The name of the screen scheme").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "screens": z.record(z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation")).describe("Similar to the field layout scheme those mappings allow users to set different screens for different operations: default - always there, applied to all operations that don't have an explicit mapping `create`, `view`, `edit` - specific operations that are available and users can assign a different screen for each one of them https://support.atlassian.com/jira-cloud-administration/docs/manage-screen-schemes/\\#Associating-a-screen-with-an-issue-operation").optional() }).strict().nullable().describe("Defines the payload for the screen schemes. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-schemes/\\#api-rest-api-3-screenscheme-post")).nullable().describe("The screen schemes See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-schemes/\\#api-rest-api-3-screenscheme-post").optional(),
  "screens": z.array(z.object({ "description": z.string().describe("The description of the screen").optional(), "name": z.string().describe("The name of the screen").optional(), "pcri": z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation").optional(), "tabs": z.array(z.object({ "fields": z.array(z.object({ "anID": z.boolean().optional(), "areference": z.boolean().optional(), "entityId": z.string().optional(), "entityType": z.string().optional(), "id": z.string().optional(), "type": z.enum(["id","ref"]).optional() }).strict().describe("Every project-created entity has an ID that must be unique within the scope of the project creation. PCRI (Project Create Resource Identifier) is a standard format for creating IDs and references to other project entities. PCRI format is defined as follows: pcri:\\[entityType\\]:\\[type\\]:\\[entityId\\] entityType - the type of an entity, e.g. status, role, workflow type - PCRI type, either `id` - The ID of an entity that already exists in the target site, or `ref` - A unique reference to an entity that is being created entityId - entity identifier, if type is `id` - must be an existing entity ID that exists in the Jira site, if `ref` - must be unique across all entities in the scope of this project template creation")).describe("The list of resource identifier of the field associated to the tab. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/\\#api-rest-api-3-screens-screenid-tabs-tabid-fields-post").optional(), "name": z.string().describe("The name of the tab").optional() }).strict().describe("Defines the payload for the tabs of the screen. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/\\#api-rest-api-3-screens-screenid-tabs-tabid-fields-post")).describe("The tabs of the screen. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/\\#api-rest-api-3-screens-screenid-tabs-tabid-fields-post").optional() }).strict().nullable().describe("Defines the payload for the field screens. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screens/\\#api-rest-api-3-screens-post")).nullable().describe("The screens. See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screens/\\#api-rest-api-3-screens-post").optional()
}