import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "type": z.string().describe("Specifies the type name."),
  "inherited": z.string().describe("Specifies whether or not to include all of the properties of a type including the inherited properties from the parent type.").optional(),
  "locale": z.string().describe("The locale name.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "include-value-assist": z.string().describe("Specifies whether the Response includes the definition information of the value assist.").optional(),
  "include-lifecycle": z.string().describe("Specifies whether or not to get the type related information for the different lifecycles and states.").optional(),
  "include-auditable-events": z.string().describe("Specifies whether or not to get the type auditable system and app events.").optional(),
  "include-display-configs": z.string().describe("Specifies whether or not to get the type display configuration information.").optional(),
  "include-mapping-tables": z.string().describe("Specifies whether or not to get the type and properties mapping table information.").optional(),
  "include-value-constraints": z.string().describe("Specifies whether or not to get the type and properties value constraints information.").optional(),
  "include-all": z.string().describe("Specifies whether or not to get all the type related information.").optional(),
  "scope-config": z.string().describe("Specifies whether to get type properties based on the specified scope and display configuration. The value you can set is the scope configuration name. The scope-configuration and the display-configuration must be provided together.").optional(),
  "display-config": z.string().describe("Specifies whether to get type properties based on the specified scope and display configuration. The value you can set is the display configuration display name. The scope-configuration and display-configuration must be provided together.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional()
}