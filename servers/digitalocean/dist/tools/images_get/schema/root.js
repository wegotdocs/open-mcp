import { z } from "zod";
export const inputParams = {
    "image_id": z.union([z.number().int(), z.string()]).describe("A unique number (id) or string (slug) used to identify and reference a\nspecific image.\n\n**Public** images can be identified by image `id` or `slug`.\n\n**Private** images *must* be identified by image `id`.\n")
};
