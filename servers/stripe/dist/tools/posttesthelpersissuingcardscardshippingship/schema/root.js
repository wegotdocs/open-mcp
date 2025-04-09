import { z } from "zod";
export const inputParams = {
    "card": z.string().max(5000)
};
