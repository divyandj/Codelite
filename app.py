from flask import Flask, request
from youtube_transcript_api import YouTubeTranscriptApi
from transformers import pipeline

app = Flask(__name__)
@app.route('/subtitle', methods=['GET'])
def subtitle_api():
    url = request.args.get('url','')
    video_id = url.split('=')[1]
    transcript = get_transcript(video_id)
    return transcript

def get_transcript(video_id):
    transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
    transcript = ' '.join([d['text'] for d in transcript_list])
    return transcript

if __name__ == '__main__':
    app.run()