import { z } from "zod";
export const inputParams = {
    "schemeId": z.string().describe("The ID of the issue security scheme."),
    "levelId": z.string().describe("The ID of the issue security level."),
    "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g `reporter`, `group`, `user`, `projectrole`, `applicationRole`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional()
};
