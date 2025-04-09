import { z } from "zod";
export const inputParams = {
    "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
};
