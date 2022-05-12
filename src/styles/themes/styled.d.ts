import 'styled-components';

declare module 'styled-components' {
    export interface DeafultTheme {
        title: string,

        colors: {
            primary: string;
            secondary: string;
            tertiaty: string,
    
            white: string;
            black: string;
            gray: string;
    
            sucess: string;
            info: string;
            warning: string;
    
        },
    };
} 