import { useState } from "react";
import { ContactFormData } from "../types";
import { emailService } from "../utils/emailService";

interface UseEmailReturn {
  sendEmail: (formData: ContactFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  resetStatus: () => void;
}

export const useEmail = (): UseEmailReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (formData: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!emailService.isConfigured()) {
        console.log("Demo mode - Email data:", formData);
        await new Promise((resolve) => setTimeout(resolve));
        setSuccess(true);
        return;
      }

      await emailService.sendEmail(formData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ett fel uppstod");
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    sendEmail,
    isLoading,
    error,
    success,
    resetStatus,
  };
};
