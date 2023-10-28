import { JOBS } from "@/assets/svg/data/jobs";

export const searchIdx = (value: string): number => {
  let focused = 0;
  JOBS.find((job, idx) => {
    if (job.keyword === value) focused = idx;
  });

  return focused;
};
