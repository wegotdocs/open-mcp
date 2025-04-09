import { z } from "zod";
export const inputParams = {
    "cluster_uuids": z.array(z.string()).describe("An array containing the UUIDs of Kubernetes clusters.").optional()
};
