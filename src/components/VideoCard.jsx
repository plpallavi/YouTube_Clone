import React from 'react'
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, caardMedia} from '@mui/material';
import { CheckCircle} from '@mui/icons-material';
import {deomoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants';

const VideoCard = ({ video:{id:{videoId}, snippet} }) => {
    return (
    <div>VideoCard</div>
    )
}

export default VideoCard