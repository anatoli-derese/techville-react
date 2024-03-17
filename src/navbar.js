import NavbarDesktop from './navbar-desktop';
import NavbarMobile from './navbar-mobile';



const Navbar = () => {

    const windowWidth = window.innerWidth;

    const mobile = (
        <div className="mobile">
            <h2>This is mobile</h2>
        </div>
    )

    if( windowWidth < 1023){
        return <NavbarMobile/>
    }
    return (
        <NavbarDesktop />
    );
}

 
export default Navbar;




