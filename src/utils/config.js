const API_KEY="AIzaSyBf_TbhDiQGd1XBe0mHM6s46i9M9woDGkY";

export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=32&key="+API_KEY;

export const YOUTUBE_RELATED_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key="+API_KEY+"&videoCategoryId=";

export const YOUTUBE_SUGGESTION_KEY="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_BY_ID="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id=";


export const YOUTUBE_CHANNEL_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;

export const YOUTUBE_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&&key="+API_KEY+"&q=";
