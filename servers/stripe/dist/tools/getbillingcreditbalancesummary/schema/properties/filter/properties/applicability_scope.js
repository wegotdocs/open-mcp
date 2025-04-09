import { z } from "zod";
export const inputParams = {
    "price_type": z.literal("metered").optional(),
    "prices": z.array(z.object({ "id": z.string().max(5000) })).optional()
};
