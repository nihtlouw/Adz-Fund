import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "@/lib/validation";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function allow(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) {
      return { ok: true as const };
    }
    if (!allow(data.email.toLowerCase())) {
      return {
        ok: false as const,
        error: "Please wait a moment before sending another inquiry.",
      };
    }
    return { ok: true as const };
  });
