import { company } from "./company";
import { consultationFlow } from "./consultationFlow";
import { faq } from "./faq";
import { personality } from "./personality";
import { services } from "./services";

export const systemPrompt = `
${personality}

${company}

${services}

${consultationFlow}

${faq}
`;