const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface SupportRequest {
  name: string;
  email: string;
  category: string;
  phone: string;
  subject: string;
  description: string;
}

export async function submitSupportRequest(data: SupportRequest) {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured");
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/support/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to submit support request");
  }

  return response.json();
}
