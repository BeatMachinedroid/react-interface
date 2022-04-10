import Logo from './logo';
import Nav from './nav';
import Icons from './icons';

function Header(){
    return(
        <header class="header">
            <Logo/>
            <Nav/>
            <Icons/>
        </header>
    );
}

export default Header;