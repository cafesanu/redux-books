import React, {Component} from 'react';
import { VideoListItem } from '../videoListItem/videoListItem';
import PropTypes from 'prop-types';

export class VideoList extends Component {
    constructor(props) {
        super(props);

        this.videoItems = [];
    }

    render() {
        this.videoItems = this.props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelected={this.props.onVideoSelected}
                    key={video.etag}
                    video={video}
                />
            );
        });

        return (
            <ul className="col-md-4 list-group">
                {this.videoItems}
            </ul>
        );
    }
}

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelected: PropTypes.func.isRequired,
};
