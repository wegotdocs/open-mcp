import { z } from "zod";
export const inputParams = {
    "repo": z.string().describe("The name of the git repository. For example: \\\"vercel/next.js\\\""),
    "type": z.enum(["github", "gitlab", "bitbucket"]).describe("The Git Provider of the repository")
};
