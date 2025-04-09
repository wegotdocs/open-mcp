import { z } from "zod";
export const inputParams = {
    "firstName": z.string().max(80).describe("The first name.").optional(),
    "gender": z.enum(["MALE", "FEMALE", "UNKNOWN"]).describe("The gender.\n>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.").optional(),
    "infix": z.string().max(20).describe("The name's infix, if applicable.\n>A maximum length of twenty (20) characters is imposed.").optional(),
    "lastName": z.string().max(80).describe("The last name.").optional()
};
