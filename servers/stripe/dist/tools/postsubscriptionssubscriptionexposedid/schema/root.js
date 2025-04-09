import { z } from "zod";
export const inputParams = {
    "subscription_exposed_id": z.string().max(5000)
};
