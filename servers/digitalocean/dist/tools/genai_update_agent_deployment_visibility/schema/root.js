import { z } from "zod";
export const inputParams = {
    "uuid": z.string().describe("Unique id"),
    "b_uuid": z.string().describe("Unique id").optional(),
    "visibility": z.enum(["VISIBILITY_UNKNOWN", "VISIBILITY_DISABLED", "VISIBILITY_PLAYGROUND", "VISIBILITY_PUBLIC", "VISIBILITY_PRIVATE"]).describe("- VISIBILITY_UNKNOWN: The status of the deployment is unknown\n - VISIBILITY_DISABLED: The deployment is disabled and will no longer service requests\n - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state\n - VISIBILITY_PUBLIC: The deployment is public and will service requests from the public internet\n - VISIBILITY_PRIVATE: The deployment is private and will only service requests from other agents, or through API keys").optional()
};
