import { z } from "zod";
export const inputParams = {
    "payment_link": z.string().max(5000)
};
