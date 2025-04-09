import { z } from "zod";
export const inputParams = {
    "project_id": z.string().uuid().describe("A unique identifier for a project.")
};
