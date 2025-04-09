import { z } from "zod";
export const inputParams = {
    "data_source_uuids": z.array(z.string()).describe("List of data source ids to index, if none are provided, all data sources will be indexed").optional(),
    "knowledge_base_uuid": z.string().describe("Knowledge base id").optional()
};
