import React, {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AppContext} from "../context/AppContext";

export const Home = () => {

    const {isAuth} = useContext(AppContext)

    return <Container>
        <Row>
            <Col>
                <div style={{"padding":"20px 0px 0px 20px"}}>
                    Home
                    <p></p>
                    {isAuth
                        ? <p>Вы авторизованы</p>
                        : <p>Вы не авторизованы</p>
                    }
                </div>
            </Col>
        </Row>
    </Container>
}