import {useState, useEffect} from 'react';
import {Box,Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI} from '../utils/fetchFromAPI';
import {Videos} from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=`).then((data)=> setVideos(data.items))
  }, []);

  return (
    <div>
        <Box p={2} sx={{overflowY:'auto', height:'90vh', flex: 2}}>
          <Typography 
            variant ="h4"
            fontWeight = "bold"
            mb={2}
            sx={{color: 'white'}}>
        
          Search Results for: <span style ={{color: '#F31503'}}>{searchTerm}</span>Videos
          </Typography>
          <Videos videos={videos}/>
        </Box>
    </div>
  )
}
export default SearchFeed