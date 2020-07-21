import React, { Component } from "react";
import { LobbyAPI } from "../../api";
import './homePage.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateRoom from '../modal/createRoom/createRoom';
import JoinRoom from '../modal/joinRoom/joinRoom';


const api = new LobbyAPI();

class HomePage extends Component {
    state = {
        showCreateRoom: false,
        showJoinRoom: false,
    };
    handleCreateRoomShow = () => {
        this.setState({ showCreateRoom: true });
    };
    handleCreateRoomClose = () => {
        this.setState({ showCreateRoom: false });
    };
    handleJoinRoomShow = () => {
        this.setState({ showJoinRoom: true });
    };
    handleJoinRoomClose = () => {
        this.setState({ showJoinRoom: false });
    };

    createGame = () => {
        console.log("createGame");
        if (this.state.loading) {
            return;
        } else {
            this.setState({
                loading: true,
            });
        }
        api.createRoom(2).then(
            (roomID) => {
                const history = this.props.history;
                console.log("Created room with roomID = ", roomID);
                this.setState({ loading: false });
                history.push("/lobby/" + roomID);
            },
            (err) => {
                console.log(err);
                this.setState({ loading: false });
            }
        );
    };
    render() {
        const history = this.props.history;

        return (
            <div class="center">

                <Container>
                    <Row>
                        <Col>
                            <Button variant="primary" value="Open" onClick={this.handleCreateRoomShow} >Create Room</Button>
                        </Col>
                        <Col>
                            <Button variant="primary" value="Open" onClick={this.handleJoinRoomShow}>Join Room</Button>
                        </Col>
                    </Row>
                </Container>
                <CreateRoom state={this.state} onHide={() => this.handleCreateRoomClose()}> </CreateRoom>
                <JoinRoom state={this.state} onHide={() => this.handleJoinRoomClose()}> </JoinRoom>
            </div >
        );
    }

}

export default HomePage;
