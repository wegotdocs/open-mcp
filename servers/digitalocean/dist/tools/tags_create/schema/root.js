import { z } from "zod";
export const inputParams = {
    "name": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.\nThere is a limit of 255 characters per tag.\n\n**Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.\n\nWhen working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named \"PROD\", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).\n\nTagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named \"PROD\", you can tag resources in the control panel by entering \"prod\". The tag will still display with its canonical capitalization, \"PROD\".\n").optional(),
    "resources": z.string().optional()
};
