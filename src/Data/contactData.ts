export { branches, workingHours } from "./branchData";

export type ContactField = {
  name: "fullName" | "phone" | "email" | "message";
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email" | "textarea";
  optional?: boolean;
};

export const contactData: ContactField[] = [
  { name: "fullName", label: "Full Name", placeholder: "Your full name", type: "text" },
  { name: "phone", label: "Phone Number", placeholder: "+251 9__ __ __", type: "tel" },
  { name: "email", label: "Email", placeholder: "you@example.com", type: "email", optional: true },
  { name: "message", label: "Message", placeholder: "How can we help you?", type: "textarea" },
];
