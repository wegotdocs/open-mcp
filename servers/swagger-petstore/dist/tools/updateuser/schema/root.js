import { z } from "zod";
export const inputParams = {
    "username": z.string().describe("name that need to be deleted"),
    "id": z.number().int().optional(),
    "b_username": z.string().optional(),
    "firstName": z.string().optional(),
    "lastName": z.string().optional(),
    "email": z.string().optional(),
    "password": z.string().optional(),
    "phone": z.string().optional(),
    "userStatus": z.number().int().describe("User Status").optional()
};
