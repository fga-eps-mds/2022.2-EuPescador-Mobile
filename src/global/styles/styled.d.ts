import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  export interface Theme {
    theme: DefaultTheme;
  }

  export interface DefaultTheme {
    colors: {
      primary: string;
      primary_light: string;

      secondary: string;
      secondary_dark: string;

      background: string;

      on_secondary_dark: string;
      on_background: string;
      on_primary: string;
      on_secondary: string;
      on_error: string;
    };

    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
