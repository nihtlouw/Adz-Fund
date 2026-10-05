type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "strategy_section_view"
  | "portfolio_view"
  | "insight_open"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_error"
  | "external_link_click";

/**
 * Provider-agnostic analytics. Swap the body to wire a vendor later.
 * Never send form field contents.
 */
export function track(event: AnalyticsEvent, payload?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const safe = payload ? { ...payload } : undefined;
  if (safe) {
    delete safe.message;
    delete safe.email;
    delete safe.phone;
    delete safe.fullName;
  }
  window.dispatchEvent(new CustomEvent("azhcriel:analytics", { detail: { event, payload: safe } }));
}
