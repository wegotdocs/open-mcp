import { z } from "zod"

export const inputParamsSchema = {
  "dataset_id": z.string().describe("The identifier of the dataset to be queried.\n\nYou can find it in the \"Information\" tab of the dataset page or in the dataset URL, right after `/datasets/`."),
  "parquet_compression": z.enum(["snappy","zstd"]).describe("Sets the compression parameter for the Parquet export file").optional()
}