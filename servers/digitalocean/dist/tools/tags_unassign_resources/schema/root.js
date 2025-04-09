import { z } from "zod";
export const inputParams = {
    "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."),
    "resources": z.array(z.any()).describe("An array of objects containing resource_id and resource_type  attributes.")
};
