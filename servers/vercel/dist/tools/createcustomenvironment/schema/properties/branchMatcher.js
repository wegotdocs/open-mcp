import { z } from "zod";
export const inputParams = {
    "type": z.enum(["equals", "startsWith", "endsWith"]).describe("Type of matcher. One of \\\"equals\\\", \\\"startsWith\\\", or \\\"endsWith\\\"."),
    "pattern": z.string().max(100).describe("Git branch name or portion thereof.")
};
