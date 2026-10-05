import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { INQUIRY_TYPES } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";
import { submitInquiry } from "@/lib/contact";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const submit = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: undefined,
      message: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    try {
      const result = await submit({ data: values });
      if (result.ok) {
        setStatus("success");
        form.reset();
        track("contact_form_submit", { inquiryType: values.inquiryType });
      } else {
        setStatus("error");
        setServerError(result.error);
        track("contact_form_error", { reason: "rate_limit" });
      }
    } catch {
      setStatus("error");
      setServerError("The inquiry could not be sent. Please try again.");
      track("contact_form_error", { reason: "network" });
    }
  }

  function markStart() {
    if (started) return;
    setStarted(true);
    track("contact_form_start");
  }

  if (status === "success") {
    return (
      <div className="border border-forest bg-paper px-6 py-10 sm:px-10" role="status">
        <p className="text-xs font-semibold tracking-[0.18em] text-forest uppercase">Received</p>
        <h3 className="mt-3 font-display text-3xl font-medium text-ink">Thank you.</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
          Your inquiry has been received. Our team will review your message and respond through the
          appropriate channel.
        </p>
        <Button type="button" variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onFocusCapture={markStart}
      noValidate
      className="relative grid gap-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message} required>
          <Input
            id="fullName"
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...form.register("fullName")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message} required>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...form.register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="company" label="Company" error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...form.register("company")} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...form.register("phone")} />
        </Field>
      </div>

      <Field id="inquiryType" label="Inquiry type" error={errors.inquiryType?.message} required>
        <select
          id="inquiryType"
          className="h-12 w-full border border-line bg-cream px-4 font-sans text-sm text-ink outline-none transition-[border-color] duration-150 focus-visible:border-forest focus-visible:ring-2 focus-visible:ring-forest/20"
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
          {...form.register("inquiryType")}
        >
          <option value="" disabled>
            Select an option
          </option>
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message?.message} required>
        <Textarea
          id="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...form.register("message")}
        />
      </Field>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-forest"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...form.register("consent")}
          />
          <span>
            I consent to AzHcriel Capital storing this inquiry in order to respond. Do not include
            confidential deal materials in this form.
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-destructive" role="alert">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p className="text-sm text-destructive" role="alert">
          {serverError}
        </p>
      ) : null}

      <div>
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending…" : "Submit inquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className={cn("mb-2", required && "after:ml-1 after:text-forest after:content-['*']")}>
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
