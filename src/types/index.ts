export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textLight: string;
    accent: string;
    success: string;
    error: string;
    border: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  content: string;
  image?: string;
}

export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  content: "contact";
}
