export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export interface ChatLeadData {
  coupleName: string;
  weddingDate: string;
  venue: string;
  service: string;
  weddingType: string;
  guestCount: string;
  contactNumber: string;
  email: string;
}

export interface ChatApiResponse {
  reply: string;
  leadData?: ChatLeadData;
}