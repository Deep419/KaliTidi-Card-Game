import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class JoinRoom extends Component {


    render() {
        return (
            <>
                <Modal show={this.props.state.showJoinRoom} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Join Room</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.props.onHide}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    };
}

export default JoinRoom;