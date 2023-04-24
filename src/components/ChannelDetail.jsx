import React from 'react';
import {usestate, useEffect} from 'react';
import{ useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import{ Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const[channelDetail, setChannelDetail] = usestate(null)
  const {id} = useParams();

  console.log(channelDetail)

  useEffect(() =>{
    fetchFromAPI(`channel?part="snippet&id=${id}`).then((data)=> setChannelDetail(data?.item[0]));
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail