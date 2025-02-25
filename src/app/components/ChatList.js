import React, {Component} from "react"
import {connect} from 'react-redux'
import '../../assets/css/chatlist.css'

class ChatList extends Component {
    render() {
        const {showHideChatList} = this.props.phoneNumbers;
        if (showHideChatList === 'hide') {
            return false
        }
        return (
            <div className="container">
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                            <div className="inbox_chat">
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"><img
                                            src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                                                astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mesgs">
                            <div className="msg_history">
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"><img
                                        src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Test, which is a new approach to have</p>
                                            <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Type a message"/>
                                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o"
                                                                                      aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers
});
export default connect(
    mapStateToProps,
    {}
)(ChatList);