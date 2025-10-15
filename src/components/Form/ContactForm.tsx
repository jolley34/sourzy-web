import React, { useEffect, useState } from "react";
import { useEmail } from "../../hooks/useEmail";
import { ContactFormData } from "../../types";
import {
  FormButton,
  FormContainer,
  FormError,
  FormErrorAlert,
  FormGrid,
  FormGroup,
  FormInput,
  FormLabel,
  FormSuccess,
  FormTextarea,
  LoadingSpinner,
} from "./Form.styling";

interface ContactFormProps {
  onSuccess?: () => void;
  autoClose?: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSuccess,
  autoClose,
}) => {
  const { sendEmail, isLoading, error, success, resetStatus } = useEmail();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (success && onSuccess && autoClose) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, onSuccess, autoClose]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "The name must be at least 2 characters.";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Enter a valid email address.";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "The message must be at least 10 characters.";
        break;
      default:
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.message = validateField("message", formData.message);

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }

    if (error) {
      resetStatus();
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (!validateForm()) {
      return;
    }

    try {
      await sendEmail(formData);
      if (!error) {
        setFormData({ name: "", email: "", message: "", subject: "" });
        setTouched({});
        setErrors({});
      }
    } catch (err) {}
  };

  return (
    <FormContainer>
      {success && (
        <FormSuccess>
          Thank you for your message! We will get back to you as soon as
          possible.{" "}
        </FormSuccess>
      )}

      {error && <FormErrorAlert>{error}</FormErrorAlert>}

      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <FormLabel htmlFor="name">
              Name <span className="required">*</span>
            </FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your name"
              $hasError={!!errors.name && touched.name}
              disabled={isLoading}
            />
            {errors.name && touched.name && (
              <FormError>{errors.name}</FormError>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">
              Email <span className="required">*</span>
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="your.mail@email.com"
              $hasError={!!errors.email && touched.email}
              disabled={isLoading}
            />
            {errors.email && touched.email && (
              <FormError>{errors.email}</FormError>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What is your subject regarding?"
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">
              Message <span className="required">*</span>
            </FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Write your meessage here..."
              $hasError={!!errors.message && touched.message}
              disabled={isLoading}
            />
            {errors.message && touched.message && (
              <FormError>{errors.message}</FormError>
            )}
          </FormGroup>

          <FormButton type="submit" $loading={isLoading} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send message"}
            {isLoading && <LoadingSpinner />}
          </FormButton>
        </FormGrid>
      </form>
    </FormContainer>
  );
};
