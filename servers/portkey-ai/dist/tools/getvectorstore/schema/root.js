import { z } from "zod";
export const inputParams = {
    "vector_store_id": z.string().describe("The ID of the vector store to retrieve.")
};
