import { z } from "zod";
export const inputParams = {
    "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
    "name": z.string().describe("The name of the database.")
};
