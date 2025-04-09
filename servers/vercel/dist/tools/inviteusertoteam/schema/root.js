import { z } from "zod";
export const inputParams = {
    "uid": z.string().describe("The id of the user to invite").optional(),
    "email": z.string().email().describe("The email address of the user to invite").optional(),
    "role": z.enum(["OWNER", "MEMBER", "DEVELOPER", "SECURITY", "BILLING", "VIEWER", "CONTRIBUTOR"]).describe("The role of the user to invite").optional(),
    "projects": z.array(z.object({ "projectId": z.string().max(64).describe("The ID of the project."), "role": z.enum(["ADMIN", "PROJECT_VIEWER", "PROJECT_DEVELOPER"]).describe("Sets the project roles for the invited user") }).strict()).optional()
};
