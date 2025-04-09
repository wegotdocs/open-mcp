import { z } from "zod";
export const inputParams = {
    "customer": z.string().max(5000),
    "transaction": z.string().max(5000)
};
