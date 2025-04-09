import { z } from "zod";
export const inputParams = {
    "indexing_job_uuid": z.string().describe("Uuid of the indexing job")
};
