import { z } from "zod";
export const inputParams = {
    "after": z.string().max(5000)
};
