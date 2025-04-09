import { z } from "zod";
export const inputParams = {
    "inviteCode": z.string().describe("The invite code to join the team.").optional()
};
