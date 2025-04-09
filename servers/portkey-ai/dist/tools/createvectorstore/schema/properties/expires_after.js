import { z } from "zod";
export const inputParams = {
    "anchor": z.literal("last_active_at").describe("Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`."),
    "days": z.number().int().gte(1).lte(365).describe("The number of days after the anchor time that the vector store will expire.")
};
