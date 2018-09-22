import React from "react";
import ReactDOM from 'react-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';
import  Shared_post  from '../common/network_components/shared_post';
import { Comment } from '../common/network_components/comment';
import Feed_blocks from '../feed';
import SamplePostImage from '../../img/THE_Royal.jpg'


export default class Contributions extends React.Component {

	render (){

 const img1 = 'https://photos.smugmug.com/Aug-26-NL/i-R4TpwMZ/0/1794d6cd/S/IMG_9192-S.jpg'
 const img2 = 'https://photos.smugmug.com/May-20th-NL/i-5CSpT9D/0/c95a1145/S/sampleimg-S.png'
 const post = [
      { postImg: SamplePostImage, comment: 'These are the comments we will share 1'  },
      { postImg: img1, comment: 'These are the comments we will share 2'  },
      { postImg: img2, comment: ' These are the comments we will share 3'  },
    ];



		return (
           

<div>
<div id="wrapper">
            <div id="sidebar-wrapper" className="">
            <Feed_blocks/>
            </div>
                    
            <div id="page-content-wrapper">
                    <h1> contributions</h1>
             
                      <Contribution_subnav/> 
                      <Shared_post post={post} /> 
                      <Comment/>   
                 
        </div>{/*END page-content-wrapper*/} 
        
    </div>{/*END WRAPPER */} 
</div>


	);
  }
}



