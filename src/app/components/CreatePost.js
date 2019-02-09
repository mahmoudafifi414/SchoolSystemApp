import React, {Component} from "react"
import {connect} from 'react-redux'
import {addPost, deletePost, getPosts} from "../actions/NumbersActions";
import {MenuItem, Nav, NavDropdown} from "react-bootstrap"

class CreatePost extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    state = {
        body: '',
        enableSubmit: false
    }
    deletePost = e => {
        this.props.deletePost(e.target.id)
    }
    setBody = e => {
        if (e.target.value.length > 20) {
            this.setState({enableSubmit: true})
        } else {
            this.setState({enableSubmit: false})
        }
        this.setState({body: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        const newPost = {
            userId: localStorage.getItem('user-id'),
            postBody: this.state.body
        };
        // Add contact
        this.props.addPost(newPost);
        const form = document.getElementsByName('create-post-form')[0];
        form.reset();
    };

    render() {
        const {posts} = this.props.phoneNumbers;
        const textAreaStyle = {
            margin: "0px 455px 0px 0px",
            width: "514px",
            height: "67px"
        }
        const imageStyle = {
            width: "530px"
        }
        const thumbStyle = {
            width: "650px",
            borderRadius: "24px"
        }
        const containerStyle = {
            marginLeft: "118px"
        }
        const dropDownStyle = {
            float: "right"
        }
        //console.log(this.props.phoneNumbers.addContactNotification)
        let notification = ''
        const {showHide} = this.props.phoneNumbers;
        let contactForm;
        let postsSection;
        let button;
        if (this.state.enableSubmit) {
            button = <button type="submit" className="btn btn-primary">Post</button>
        } else {
            button = <button type="submit" disabled className="btn btn-primary">Post</button>
        }
        if (showHide == 'show') {
            contactForm =
                <div>
                    <form role="form" name="create-post-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <textarea style={textAreaStyle} placeholder="Write Post here..." className="form-control"
                                  onChange={this.setBody}/>
                        </div>
                        <div className="form-group">
                            {button}
                        </div>
                    </form>
                </div>
            postsSection =
                <div>
                    {posts.map((post) => (
                        <div key={post.id} className="row thumbnail" style={thumbStyle}>
                            <Nav pullRight>
                                <NavDropdown eventKey={1} title="" id="basic-nav-dropdown">
                                    <MenuItem href='#' onClick={this.deletePost} id={post.id}>Delete</MenuItem>
                                    <MenuItem href='/edit'>Edit</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p>
                                        {post.post_body}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <a href="#">
                                        {post.image ?
                                            <img style={imageStyle} src="http://placehold.it/260x180" alt=""/> : ''}
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <p>
                                        <i className="fa fa-comment"></i> <a href="#">3 Comments</a>
                                        | <i className="fa fa-share"></i> <a href="#">39 Shares</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        }
        else {
            contactForm = ''
            postsSection = ''
        }
        return (
            <div style={containerStyle}>
                {contactForm}
                {postsSection}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    phoneNumbers: state.phoneNumbers
});

export default connect(
    mapStateToProps,
    {addPost, getPosts, deletePost}
)(CreatePost);