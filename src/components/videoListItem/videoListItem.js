import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;

        const imageUrl = video.snippet.thumbnails.default.url;

        return (
            // <li onClick={this.props.onVideoSelected(video)} className="list-group-item">
            <li onClick={() => this.props.onVideoSelected(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

VideoListItem.propTypes = {
    video: PropTypes.object.isRequired,
    onVideoSelected: PropTypes.func,
};
