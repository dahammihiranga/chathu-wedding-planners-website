export type AppointmentFormValues = {
  coupleName: string;
  email: string;
  contactNumber: string;
  weddingDate: string;
  venue: string;
  service: string;
  weddingType: string;
  guestCount: string;
  message: string;
};

export type AppointmentFormErrors = Partial<
  Record<keyof AppointmentFormValues, string>
>;

export type SubmissionStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";