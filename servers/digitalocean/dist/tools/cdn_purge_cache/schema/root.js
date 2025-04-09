import { z } from "zod";
export const inputParams = {
    "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint."),
    "files": z.array(z.string()).describe("An array of strings containing the path to the content to be purged from the CDN cache.")
};
