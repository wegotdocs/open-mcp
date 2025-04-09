import { z } from "zod";
export const inputParams = {
    "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `functionKey` Sorts by the functionKey.\n *  `used` Sorts by the used timestamp.\n *  `created` Sorts by the created timestamp.\n *  `updated` Sorts by the updated timestamp.").optional(),
    "precomputationIDs": z.array(z.string()).optional()
};
