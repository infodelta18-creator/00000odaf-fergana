export type Branch = {
  id: string;
  city: string;
  name?: string;
  address: string;
  phones: string[];
  email?: string;
};

export const branches: Branch[] = [
  {
    id: "margilan",
    city: "Marg'ilon",
    address: "Marg'ilon, Oygul 3-qavati",
    phones: ["+99 890 776 15 16"],
    email: "leadermargilon@gmail.com",
  },
];

export function mapSearchUrl(city: string, address: string): string {
  const q = encodeURIComponent(`${city}, ${address}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function mapEmbedUrl(city: string, address: string): string {
  const q = encodeURIComponent(`${city}, ${address}`);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}