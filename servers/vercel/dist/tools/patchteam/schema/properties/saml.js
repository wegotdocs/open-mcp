import { z } from "zod";
export const inputParams = {
    "enforced": z.boolean().describe("Require that members of the team use SAML Single Sign-On.").optional(),
    "roles": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `roles` to the tool, first call the tool `expandSchema` with \"/properties/saml/properties/roles\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Directory groups to role or access group mappings.</property-description>").optional()
};
