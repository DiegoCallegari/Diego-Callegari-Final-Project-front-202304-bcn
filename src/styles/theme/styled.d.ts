import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      clean: string;
      secondaryClean: string;
      terciaryClean: string;
      softDark: string;
      dark: string;
      redLight: string;
      confirm: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSizes: {
      super: string;
      high: string;
      medium: string;
      small: string;
    };

    fontWeigth: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
