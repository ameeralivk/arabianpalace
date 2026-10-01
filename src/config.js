export const RESTAURANT = {
  name: "Arabian Palace",
  address: "Marottichuvadu Road, Edappally, Kochi",
  hours: "Daily: 12:00 PM – 11:00 PM",
  instagramUrl:
    "https://www.instagram.com/arabianpalace_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  googleReviewUrl: "https://share.google/WdoMj2bxOCk5HII2a",
  // Business WhatsApp number: digits only, with country code, no "+" or spaces (e.g. '919876543210').
  whatsappNumber: "919778364599",
  whatsappMessage:
    "Hello, I would like to share some feedback about my experience.",
};

export const whatsappFeedbackUrl = ({ name, rating, review, message = RESTAURANT.whatsappMessage } = {}) => {
  const lines = [message];
  if (name) lines.push(`Name: ${name}`);
  if (rating) lines.push(`Rating: ${rating}/5`);
  if (review) lines.push(`Feedback: ${review}`);
  const digits = RESTAURANT.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join('\n'))}`;
};
