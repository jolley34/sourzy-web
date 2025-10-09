import emailjs from "@emailjs/browser";
import { ContactFormData } from "../types";

class EmailService {
  private serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  private contactTemplateId =
    process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID || "";
  private autoReplyTemplateId =
    process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID || "";
  private publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  async sendEmail(formData: ContactFormData): Promise<void> {
    try {
      await emailjs.send(
        this.serviceId,
        this.contactTemplateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Inget ämne angivet",
          message: formData.message,
        },
        this.publicKey
      );

      await emailjs.send(
        this.serviceId,
        this.autoReplyTemplateId,
        {
          name: formData.name,
          email: formData.email,
        },
        this.publicKey
      );

      console.log("✅ Båda mejlen skickades!");
    } catch (error: any) {
      console.error("❌ Fel vid mejlsändning:", error);
      throw new Error("Kunde inte skicka meddelandet. Försök igen senare.");
    }
  }

  isConfigured(): boolean {
    return !!(
      this.serviceId &&
      this.contactTemplateId &&
      this.autoReplyTemplateId &&
      this.publicKey
    );
  }
}

export const emailService = new EmailService();
