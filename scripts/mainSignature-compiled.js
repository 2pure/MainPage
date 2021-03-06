/**
 * Created by Vetal on 01.02.2016.
 */
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Image = ReactBootstrap.Image;

const gridInstance = React.createElement(
    Grid,
    null,
    React.createElement(
        Row,
        null,
        React.createElement(Col, { md: 12,
            xs: 12,
            componentClass: "Image", src: "example1.jpg" })
    )
);

ReactDOM.render(gridInstance, document.getElementById("mainSignature"));

//# sourceMappingURL=mainSignature-compiled.js.map