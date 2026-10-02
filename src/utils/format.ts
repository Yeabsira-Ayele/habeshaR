export const formatBirr = (amount: number) =>
  `${amount.toLocaleString("en-US")} ETB`;

export const digitsOnly = (phone: string) => phone.replace(/\D/g, "");

export const telHref = (phone: string) => `tel:+${digitsOnly(phone)}`;

export const whatsappHref = (phone: string, text?: string) =>
  `https://wa.me/${digitsOnly(phone)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsHref = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
