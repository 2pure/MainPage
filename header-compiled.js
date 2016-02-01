/**The head of main page**/

var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = ReactBootstrap.Nav;
var MenuItem = ReactBootstrap.MenuItem;
var GlyphIcon = ReactBootstrap.Glyphicon;
var NavbarForm = ReactBootstrap.Form;
var Input = ReactBootstrap.Input;

const SearchGlyphIcon = React.createElement(GlyphIcon, { glyph: "search" });

const navbarInstance = React.createElement(
    Navbar,
    { inverse: true },
    React.createElement(
        Navbar.Header,
        null,
        React.createElement(
            Navbar.Brand,
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Куратор"
            )
        ),
        React.createElement(Navbar.Toggle, null)
    ),
    React.createElement(
        Navbar.Collapse,
        null,
        React.createElement(
            Nav,
            null,
            React.createElement(
                NavItem,
                { eventKey: 1, href: "#" },
                "О проекте"
            ),
            React.createElement(
                NavItem,
                { eventKey: 2, href: "#" },
                "Спектакли"
            ),
            React.createElement(
                NavItem,
                { eventKey: 3, href: "#" },
                "Театры"
            )
        ),
        React.createElement(
            Navbar.Form,
            { pullRight: true },
            React.createElement(
                "form",
                null,
                React.createElement(Input, { type: "text", addonAfter: SearchGlyphIcon })
            )
        )
    )
);

ReactDOM.render(navbarInstance, document.getElementById("header"));

//# sourceMappingURL=header-compiled.js.map