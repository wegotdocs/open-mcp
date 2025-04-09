import { z } from "zod";
export const inputParams = {
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.string()).describe("The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: `id=10000&id=10001`.").optional(),
    "schemeId": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: `schemeId=10000&schemeId=10001`.").optional(),
    "onlyDefault": z.boolean().describe("When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false.").optional()
};
