import { z } from "zod";
export const inputParams = {
    "enabled": z.boolean().describe("Indicates whether maintenance mode should be enabled for the app.").optional(),
    "archive": z.boolean().describe("Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.").optional(),
    "offline_page_url": z.string().describe("A custom offline page to display when maintenance mode is enabled or the app is archived.").optional()
};
