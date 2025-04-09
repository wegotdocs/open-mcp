import { z } from "zod";
export const inputParams = {
    "file_key": z.string().describe("The file to get the dev resources from. This must be a main file key, not a branch key."),
    "node_ids": z.string().describe("Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned.").optional()
};
