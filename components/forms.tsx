"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useTransition } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { FormResult, submitRsvp, submitWish } from "@/app/actions";
import { RsvpInput, rsvpSchema, WishInput, wishSchema } from "@/lib/validation";

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? <span className="field-error" id={id} role="alert">{message}</span> : null;

function localizeMessage(message: string | undefined, language: "en" | "ar") {
  if (!message || language === "en") return message;
  return ({
    "Please enter your name": "يرجى كتابة الاسم",
    "Please choose a response": "يرجى اختيار الرد",
    "Please include at least one guest": "يرجى تسجيل مدعو واحد على الأقل",
    "Guest count must be zero when declining": "يجب أن يكون عدد المدعوين صفرًا عند الاعتذار عن الحضور",
    "Please write a short message": "يرجى كتابة رسالة قصيرة",
    "Thank you — your reply has been received.": "شكرًا لكم — تم استلام ردكم.",
    "We could not save your RSVP. Please try again.": "تعذّر حفظ ردكم. يرجى المحاولة مرة أخرى.",
    "Your wish is now part of our story.": "أمنيتكم أصبحت الآن جزءًا من قصتنا.",
    "We could not save your wish. Please try again.": "تعذّر حفظ أمنيتكم. يرجى المحاولة مرة أخرى.",
  } as Record<string, string>)[message] ?? message;
}

export function RsvpForm({ language = "en" }: { language?: "en" | "ar" }) {
  const [status, setStatus] = useState<FormResult | null>(null);
  const [pending, startTransition] = useTransition();
  const { control, getValues, register, handleSubmit, reset, setValue, formState: { errors } } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { guests: 1 },
  });
  const attendance = useWatch({ control, name: "attending" });

  const send = (values: RsvpInput) => {
    if (pending) return;
    setStatus(null);
    startTransition(async () => {
      const result = await submitRsvp(values);
      setStatus(result);
      if (result.ok) reset({ guests: 1 });
    });
  };

  return (
    <form onSubmit={handleSubmit(send)} className="form-card">
      <label>{language === "ar" ? "اسمكم" : "Your name"}<input autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "rsvp-name-error" : undefined} {...register("name")} /></label>
      <FieldError id="rsvp-name-error" message={localizeMessage(errors.name?.message, language)} />
      <label>{language === "ar" ? "عدد المدعوين" : "Number of guests"}<input type="number" inputMode="numeric" min={attendance === "no" ? 0 : 1} max="10" readOnly={attendance === "no"} aria-disabled={attendance === "no"} aria-invalid={!!errors.guests} aria-describedby={errors.guests ? "rsvp-guests-error" : undefined} {...register("guests")} /></label>
      <FieldError id="rsvp-guests-error" message={localizeMessage(errors.guests?.message, language)} />
      <fieldset aria-describedby={errors.attending ? "rsvp-attending-error" : undefined}>
        <legend>{language === "ar" ? "هل ستحضرون؟" : "Will you attend?"}</legend>
        <Controller name="attending" control={control} render={({ field }) => (
          <div className="radio-row">
            {[["yes", language === "ar" ? "بكل سرور أوافق" : "Joyfully accept"], ["no", language === "ar" ? "أعتذر عن الحضور" : "Sadly decline"]].map(([value, label]) => (
              <label key={value}><input type="radio" name={field.name} value={value} checked={field.value === value} onBlur={field.onBlur} onChange={() => {
                field.onChange(value);
                setValue("guests", value === "no" ? 0 : Math.max(getValues("guests"), 1), { shouldValidate: true });
              }} /> {label}</label>
            ))}
          </div>
        )} />
      </fieldset>
      <FieldError id="rsvp-attending-error" message={localizeMessage(errors.attending?.message, language)} />
      <label>{language === "ar" ? "رسالة إلى ماجد ومنى" : "Message for Maged & Mona"}<textarea rows={3} {...register("message")} /></label>
      <button className="button dark" disabled={pending} aria-busy={pending}>{pending ? (language === "ar" ? "جارٍ الإرسال…" : "Sending…") : (language === "ar" ? "إرسال الرد" : "Send RSVP")}{language === "ar" ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</button>
      <p className={`form-status ${status ? status.ok ? "success" : "error" : ""}`} aria-live="polite">{localizeMessage(status?.message, language)}</p>
    </form>
  );
}

export function WishForm({ onSent, language = "en" }: { onSent?: () => void; language?: "en" | "ar" }) {
  const [status, setStatus] = useState<FormResult | null>(null);
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<WishInput>({ resolver: zodResolver(wishSchema) });
  const send = (values: WishInput) => {
    if (pending) return;
    setStatus(null);
    startTransition(async () => {
      const result = await submitWish(values);
      setStatus(result);
      if (result.ok) { reset(); onSent?.(); }
    });
  };

  return (
    <form onSubmit={handleSubmit(send)} className="form-card compact">
      <label>{language === "ar" ? "الاسم" : "Name"}<input autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "wish-name-error" : undefined} {...register("name")} /></label>
      <FieldError id="wish-name-error" message={localizeMessage(errors.name?.message, language)} />
      <label>{language === "ar" ? "أمنياتكم" : "Your wishes"}<textarea rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? "wish-message-error" : undefined} {...register("message")} /></label>
      <FieldError id="wish-message-error" message={localizeMessage(errors.message?.message, language)} />
      <button className="button outline" disabled={pending} aria-busy={pending}>{pending ? (language === "ar" ? "جارٍ الإرسال…" : "Sending…") : (language === "ar" ? "شاركوا أمنياتكم" : "Share your wishes")}{language === "ar" ? <ArrowLeft size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</button>
      <p className={`form-status ${status ? status.ok ? "success" : "error" : ""}`} aria-live="polite">{localizeMessage(status?.message, language)}</p>
    </form>
  );
}
