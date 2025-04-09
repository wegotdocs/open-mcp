import { z } from "zod"

export const inputParams = {
  "schemeId": z.string().describe("The ID of the issue security scheme."),
  "levels": z.array(z.object({ "description": z.string().max(4000).describe("The description of the issue security scheme level.").optional(), "isDefault": z.boolean().describe("Specifies whether the level is the default level. False by default.").optional(), "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g `reporter`, `group`, `user`, `projectrole`, `applicationRole`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional(), "name": z.string().max(255).describe("The name of the issue security scheme level. Must be unique.") }).strict()).describe("The list of scheme levels which should be added to the security scheme.").optional()
}