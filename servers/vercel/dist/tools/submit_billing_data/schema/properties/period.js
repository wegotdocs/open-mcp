import { z } from "zod";
export const inputParams = {
    "start": z.string().datetime({ offset: true }),
    "end": z.string().datetime({ offset: true })
};
