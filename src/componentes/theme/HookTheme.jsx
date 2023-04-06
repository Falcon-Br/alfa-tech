//Componente React
import { lightTheme, darkTheme} from './Theme';
import useLocalStorage from 'use-local-storage';

export default function HookTheme(){

    const [theme, setTheme] = useLocalStorage('theme')

    function switchTheme(){
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
   
    return{
        currentTheme: theme === 'light' ? darkTheme: lightTheme,
        switchTheme
    }
}