import {createTheme, ThemeProvider} from "@mui/material/styles"

const Theme  = createTheme({
    palette:{
        primary:{
            main:'#072B54',
            light:'rgb(255, 255, 255)'
        },
        // secondary:{
        //     main:'blue',
        //     light:'cyan'
        // }
    }
});
export function CustomTheme({children}){
    return <ThemeProvider theme= {Theme}>{children}</ThemeProvider>
}