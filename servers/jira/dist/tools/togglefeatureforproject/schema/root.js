import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
    "featureKey": z.string().describe("The key of the feature."),
    "state": z.enum(["ENABLED", "DISABLED", "COMING_SOON"]).describe("The feature state.").optional()
};
