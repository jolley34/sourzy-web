import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 0;
  display: block;

  .required {
    color: ${theme.colors.error};
    margin-left: 2px;
  }
`;

export const FormInput = styled.input<{ $hasError?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.md};
  border: 2px solid
    ${(props) => (props.$hasError ? theme.colors.error : theme.colors.border)};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  background: ${theme.colors.background};
  line-height: 1.5;

  &:focus {
    border-color: ${(props) =>
      props.$hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? `${theme.colors.error}20`
          : `${theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${theme.colors.textLight};
  }

  &:disabled {
    background-color: ${theme.colors.surface};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FormTextarea = styled.textarea<{ $hasError?: boolean }>`
  padding: ${theme.spacing.md};
  border: 2px solid
    ${(props) => (props.$hasError ? theme.colors.error : theme.colors.border)};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  background: ${theme.colors.background};
  min-height: 140px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.6;

  &:focus {
    border-color: ${(props) =>
      props.$hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? `${theme.colors.error}20`
          : `${theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${theme.colors.textLight};
  }

  &:disabled {
    background-color: ${theme.colors.surface};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FormButton = styled.button<{ $loading?: boolean }>`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.$loading ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  min-width: 160px;
  opacity: ${(props) => (props.$loading ? 0.7 : 1)};
  margin-top: ${theme.spacing.sm};

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-self: stretch;
    text-align: center;
  }
`;

export const FormError = styled.span`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  margin-top: -${theme.spacing.xs};
  display: block;
  font-weight: 500;
`;

export const FormSuccess = styled.div`
  background: ${theme.colors.success}15;
  border: 1px solid ${theme.colors.success};
  color: ${theme.colors.success};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 8px;
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-weight: 500;

  &:before {
    content: "✓";
    font-weight: bold;
    font-size: 1.3rem;
    flex-shrink: 0;
  }
`;

export const FormErrorAlert = styled.div`
  background: ${theme.colors.error}15;
  border: 1px solid ${theme.colors.error};
  color: ${theme.colors.error};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 8px;
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-weight: 500;

  &:before {
    content: "⚠";
    font-weight: bold;
    font-size: 1.3rem;
    flex-shrink: 0;
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: absolute;
  right: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);

  @keyframes spin {
    to {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`;
