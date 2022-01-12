import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
    
            black: string,
            white: string,
            grayLight: string,
            gray: string,
            orange: string,
            rose: string,
            lightYellow: string,
            blue: string,
            red: string,
            brown: string,
    
    
            success: string,
            info: string,
            warning: string,
            danger: string,
        }
    }
}