import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from '@app/searchBar/searchBar';
import { VideoList } from '@app/videoList/videoList';
import { VideoDetail } from '@app/videoDetail/videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBA55n2q6hpQgDSTdFgjm4Mt6rSHrZDNKc';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term,
        }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelected={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));
