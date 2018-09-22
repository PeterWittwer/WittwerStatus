import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import { Profile_identifier } from '../common/network_components/profile_identifier';
import  Shared_post  from '../common/network_components/shared_post';
import SamplePostImage from '../../img/THE_Royal.jpg'
import GalleriesMap from '../galleries/profile';
import RecipiesMap from '../recipes/profile';


export default class MyContributions extends React.Component {


    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };


	render (){

        function TabContainer(props) {
            return (
              <Typography component="div" style={{ padding: 8 * 3 }}>
                {props.children}
              </Typography>
            );
          }

          TabContainer.propTypes = {
            children: PropTypes.node.isRequired,
          };

        const { value } = this.state;




 const img1 = 'https://photos.smugmug.com/Aug-26-NL/i-R4TpwMZ/0/1794d6cd/S/IMG_9192-S.jpg'
 const img2 = 'https://photos.smugmug.com/May-20th-NL/i-5CSpT9D/0/c95a1145/S/sampleimg-S.png'
 const post = [
      { postImg: SamplePostImage, comment: 'These are the comments we will share 1'  },
      { postImg: img1, comment: 'These are the comments we will share 2'  },
      { postImg: img2, comment: ' These are the comments we will share 3'  },
    ];

  const gallery = [
        { year: 2016, thumbnail:  img1 },
        { year: 2017, thumbnail: img1  },
        { year: 2018, thumbnail: img2  },
      ];
      
  const recipies = [
        { title: 2016, thumbnail:  img1, description : 'This is the description yo' },
        { title: 2017, thumbnail: img1, description : 'This is the description yo'  },
        { title: 2018, thumbnail: img2, description : 'This is the description yo'  },
      ]; 




		return (
           

<div>
          

<main>
            <div>
            <Tabs className="SubTabs" value={value} onChange={this.handleChange}>
              <Tab label="Posts" />
              <Tab label="Galleries" />
              <Tab label="Recipes" />
              <Tab label="Tutorials" />
            </Tabs>



        {value === 0 && 
        <TabContainer> 
            <Shared_post post={post} /> 
        </TabContainer>}
        
        {value === 1 && 
        <TabContainer> 
            <GalleriesMap galleries={gallery}/>
        </TabContainer>} 
        
        {value === 2 && <TabContainer>
            <RecipiesMap recipies={recipies}/>
        </TabContainer>}
        
        {value === 3 && <TabContainer>Tutorials</TabContainer>}
        
      

      </div>


            </main>


</div>


	);
  }
}



