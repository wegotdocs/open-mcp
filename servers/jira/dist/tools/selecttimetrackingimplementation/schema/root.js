import { z } from "zod";
export const inputParams = {
    "key": z.string().describe("The key for the time tracking provider. For example, *JIRA*."),
    "name": z.string().describe("The name of the time tracking provider. For example, *JIRA provided time tracking*.").optional(),
    "url": z.string().describe("The URL of the configuration page for the time tracking provider app. For example, */example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.").readonly().optional()
};
