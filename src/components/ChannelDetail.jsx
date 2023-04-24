import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channel?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.item[0]));
    fetchFromAPI(`search?channelId=${id}=snippet&order=date`).then((data) => setVideos(data?.item[0]));
  }, [id])
  
  return(
    <Box minHeight = "95vh">
    <Box>
      <div style={{
        background:' linear-Gradient(90deg, rgba(0, 238, 247,1) 0%, rgba(206,3,184,1) 100%,rgba(0,212,255,1)100%)'
        zIndex:10,
        height:'300px'
      }}/>

      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
    </Box>
    <Box>
      
    </Box>
    </Box>
  )
}

export default ChannelDetail
