import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        // If you're not worries about stale data.
        //if (!this.props.post) {
            this.props.fetchPost(id);
        //}
    }

    render() {
        const { post } = this.props;
        
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

    onDeleteClick = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }
}

// First argument is the state.
// ownProps is all properties available to this component
// before mapStateToProps is executed.
function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);