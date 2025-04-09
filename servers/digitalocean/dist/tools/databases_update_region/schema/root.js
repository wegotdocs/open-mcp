import { z } from "zod";
export const inputParams = {
    "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
    "region": z.string().describe("A slug identifier for the region to which the database cluster will be migrated.")
};
