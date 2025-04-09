import { z } from "zod";
export const inputParams = {
    "uuid": z.string().describe("Knowledge base id"),
    "database_id": z.string().describe("The id of the DigitalOcean database this knowledge base will use, optiona.").optional(),
    "embedding_model_uuid": z.string().describe("Identifier for the foundation model.").optional(),
    "name": z.string().describe("Knowledge base name").optional(),
    "project_id": z.string().describe("The id of the DigitalOcean project this knowledge base will belong to").optional(),
    "tags": z.array(z.string()).describe("Tags to organize your knowledge base.").optional(),
    "b_uuid": z.string().describe("Knowledge base id").optional()
};
