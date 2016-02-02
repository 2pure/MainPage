/**
 * Created by Vetal on 01.02.2016.
 */
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Image = ReactBootstrap.Image;

const gridInstance = (
    <Grid>
        <Row>
            <Col md={12}
                 xs={12}
                 componentClass="Image" src="example1.jpg">

            </Col>
        </Row>
    </Grid>
)

ReactDOM.render(gridInstance, document.getElementById("mainSignature"));