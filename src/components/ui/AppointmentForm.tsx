"use client";

import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

import FormField from "@/components/ui/FormField";
import {
  appointmentServices,
  weddingTypes,
} from "@/data/appointment";
import type {
  AppointmentFormErrors,
  AppointmentFormValues,
  SubmissionStatus,
} from "@/types/appointment";

const initialValues: AppointmentFormValues = {
  coupleName: "",
  email: "",
  contactNumber: "",
  weddingDate: "",
  venue: "",
  service: "",
  weddingType: "",
  guestCount: "",
  message: "",
};

const inputClassName =
  "min-h-14 w-full border bg-transparent px-4 text-sm text-[#2f2927] outline-none transition placeholder:text-[#a89d97] focus:border-[#a87868]";

const selectClassName =
  "min-h-14 w-full appearance-none border bg-transparent px-4 text-sm text-[#2f2927] outline-none transition focus:border-[#a87868]";

export default function AppointmentForm() {
  const [values, setValues] =
    useState<AppointmentFormValues>(initialValues);

  const [errors, setErrors] =
    useState<AppointmentFormErrors>({});

  const [status, setStatus] =
    useState<SubmissionStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  const minimumWeddingDate = useMemo(() => {
    const today = new Date();
    const timezoneOffset = today.getTimezoneOffset() * 60_000;

    return new Date(today.getTime() - timezoneOffset)
      .toISOString()
      .split("T")[0];
  }, []);

  const validateForm = () => {
    const nextErrors: AppointmentFormErrors = {};

    if (!values.coupleName.trim()) {
      nextErrors.coupleName =
        "Please enter the couple's names.";
    }

    if (!values.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!values.contactNumber.trim()) {
      nextErrors.contactNumber =
        "Please enter your contact number.";
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(
        values.contactNumber,
      )
    ) {
      nextErrors.contactNumber =
        "Please enter a valid contact number.";
    }

    if (!values.weddingDate) {
      nextErrors.weddingDate =
        "Please select your wedding date.";
    }

    if (!values.service) {
      nextErrors.service =
        "Please select a wedding service.";
    }

    if (!values.weddingType) {
      nextErrors.weddingType =
        "Please select your wedding type.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formEndpoint =
      process.env.NEXT_PUBLIC_APPOINTMENT_FORM_ENDPOINT;

    if (!formEndpoint) {
      setStatus("error");
      setStatusMessage(
        "The appointment form is not connected yet. Please add the form endpoint in your environment settings.",
      );

      return;
    }

    try {
      setStatus("submitting");
      setStatusMessage("");

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
          subject: `New Wedding Inquiry Request — ${values.coupleName}`,
          submittedFrom:
            "Chathu Wedding Planners Website",
        }),
      });

      if (!response.ok) {
        throw new Error(
          "The appointment request could not be submitted.",
        );
      }

      setStatus("success");
      setStatusMessage(
        "Thank you! Your appointment request has been sent successfully. Our team will contact you soon.",
      );

      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error(
        "Appointment submission failed:",
        error,
      );

      setStatus("error");
      setStatusMessage(
        "We could not send your request right now. Please try again or contact us directly.",
      );
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid gap-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Couple's Names"
          name="coupleName"
          required
          type="text"
          value={values.coupleName}
          onChange={handleChange}
          placeholder="e.g. Anjalika & Avishka"
          autoComplete="name"
          error={errors.coupleName}
        />

        <FormField
          label="Email Address"
          name="email"
          required
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email}
        />

        <FormField
          label="Contact Number"
          name="contactNumber"
          required
          type="tel"
          value={values.contactNumber}
          onChange={handleChange}
          placeholder="+94 77 123 4567"
          autoComplete="tel"
          error={errors.contactNumber}
        />

        <FormField
          label="Wedding Date"
          name="weddingDate"
          required
          type="date"
          min={minimumWeddingDate}
          value={values.weddingDate}
          onChange={handleChange}
          error={errors.weddingDate}
        />

        <FormField
          label="Wedding Venue"
          name="venue"
          type="text"
          value={values.venue}
          onChange={handleChange}
          placeholder="Hotel, church or location"
          error={errors.venue}
        />

        <FormField
          label="Estimated Guest Count"
          name="guestCount"
          type="number"
          min="1"
          max="5000"
          value={values.guestCount}
          onChange={handleChange}
          placeholder="e.g. 250"
          error={errors.guestCount}
        />

        <FormField
          label="Required Service"
          name="service"
          required
          error={errors.service}
        >
          <div className="relative">
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              className={`${selectClassName} ${
                errors.service
                  ? "border-red-400"
                  : "border-[#d9cbc4]"
              }`}
            >
              <option value="">
                Select a service
              </option>

              {appointmentServices.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#a87868]">
              ↓
            </span>
          </div>
        </FormField>

        <FormField
          label="Wedding Type"
          name="weddingType"
          required
          error={errors.weddingType}
        >
          <div className="relative">
            <select
              id="weddingType"
              name="weddingType"
              value={values.weddingType}
              onChange={handleChange}
              aria-invalid={Boolean(
                errors.weddingType,
              )}
              className={`${selectClassName} ${
                errors.weddingType
                  ? "border-red-400"
                  : "border-[#d9cbc4]"
              }`}
            >
              <option value="">
                Select wedding type
              </option>

              {weddingTypes.map((weddingType) => (
                <option
                  key={weddingType}
                  value={weddingType}
                >
                  {weddingType}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#a87868]">
              ↓
            </span>
          </div>
        </FormField>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4c423e]"
        >
          Tell Us About Your Wedding
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your wedding vision, current planning stage or any support you need..."
          className="w-full resize-none border border-[#d9cbc4] bg-transparent px-4 py-4 text-sm leading-7 text-[#2f2927] outline-none transition placeholder:text-[#a89d97] focus:border-[#a87868]"
        />
      </div>

      {statusMessage && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          role={
            status === "error"
              ? "alert"
              : "status"
          }
          className={`flex items-start gap-3 border px-5 py-4 text-sm leading-6 ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status === "success" && (
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0"
            />
          )}

          <span>{statusMessage}</span>
        </motion.div>
      )}

      <div className="flex flex-col gap-5 border-t border-[#dfd2cc] pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-6 text-[#8a7d77]">
          By submitting this form, you agree that
          Chathu Wedding Planners may contact you
          regarding your wedding enquiry.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#a87868] px-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#2f2927] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle
                size={17}
                className="animate-spin"
              />

              Sending Request
            </>
          ) : (
            <>
              Book an Appointment

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <Send size={14} />
              </span>
            </>
          )}
        </button>
      </div>

      <a
        href="#services"
        className="group inline-flex w-fit items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6e625d]"
      >
        Review Our Services

        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </form>
  );
}