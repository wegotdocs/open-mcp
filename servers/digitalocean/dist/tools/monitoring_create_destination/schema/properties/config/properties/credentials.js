import { z } from "zod";
export const inputParams = {
    "username": z.string().optional(),
    "password": z.string().optional()
};
