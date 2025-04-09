import { z } from "zod";
export const inputParams = {
    "product": z.string().max(5000)
};
