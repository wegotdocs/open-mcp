import { z } from "zod";
export const inputParams = {
    "dev_resources": z.array(z.object({ "name": z.string().describe("The name of the dev resource."), "url": z.string().describe("The URL of the dev resource."), "file_key": z.string().describe("The file key where the dev resource belongs."), "node_id": z.string().describe("The target node to attach the dev resource to.") })).describe("An array of dev resources.")
};
