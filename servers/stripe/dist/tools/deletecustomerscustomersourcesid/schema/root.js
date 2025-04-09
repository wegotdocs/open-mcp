import { z } from "zod";
export const inputParams = {
    "customer": z.string().max(5000),
    "id": z.string()
};
