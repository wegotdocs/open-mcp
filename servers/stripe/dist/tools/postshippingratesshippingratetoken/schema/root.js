import { z } from "zod";
export const inputParams = {
    "shipping_rate_token": z.string().max(5000)
};
