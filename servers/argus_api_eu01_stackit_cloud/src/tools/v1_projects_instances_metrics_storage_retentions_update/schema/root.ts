import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "metricsRetentionTime1h": z.string().min(2).max(8).describe("Retention time of longtime storage of 1h sampled data. After that time the data will be deleted permanently.\n`Additional Validators:`\n* Should be a valid time string\n* Should not be bigger than metricsRetentionTime5m"),
  "metricsRetentionTime5m": z.string().min(2).max(8).describe("Retention time of longtime storage of 5m sampled data. After that time the data will be down sampled to 1h.\n`Additional Validators:`\n* Should be a valid time string\n* Should not be bigger than metricsRetentionTimeRaw"),
  "metricsRetentionTimeRaw": z.string().min(2).max(8).describe("Retention time of longtime storage of raw sampled data. After that time the data will be down sampled to 5m.\nKeep in mind, that the initial goal of downsampling is not saving disk or object storage space. In fact, downsampling doesn't save you any space but instead, it adds 2 more blocks for each raw block which are only slightly smaller or relatively similar size to raw block. This is done by internal downsampling implementation which to be mathematically correct holds various aggregations. This means that downsampling can increase the size of your storage a bit (~3x), if you choose to store all resolutions (recommended). The goal of downsampling is to provide an opportunity to get fast results for range queries of big time intervals like months or years.\n`Additional Validators:`\n* Should be a valid time string\n* Should not be bigger than 13 months"),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}