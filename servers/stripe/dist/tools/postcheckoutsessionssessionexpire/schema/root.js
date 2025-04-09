import { z } from "zod";
export const inputParams = {
    "session": z.string().max(5000)
};
