import React from "react";
import ReactDOM from 'react-dom';

const Comment = (props) => {

    return (
        
    <div className="comments_wrapper wrapper_a">
    <div> 
        <p><a>View All Comments (9)</a></p>
    </div>
    
    <div className="comment">
        <div className="profile_thumbnail">
        <img className="img-circle" src="img/japanese-girl.jpg"/>
        </div>
        <div className="comment_msg">
            I've been wanting to go there for a long time now.  Where did you stay? Was that the hotel you stayed in?   
        </div>
    </div>
    
    
    <div className="comment">
        <div className="profile_thumbnail">
        <img className="img-circle" src="img/egyption_man.jpg"/>
        </div>
        <div className="comment_msg">
            Wow this looks like an amazing hotel.  I went to Playa Del Carmen back in 1922 when it was only sand.  We travelled through there as we were migrating due to the war. It took us 130 days to get from Playa to New Mexico, USA. It was certainly a trip to remember.   
        </div>
        
    </div>
    
    
    <div className="comment_input_wrapper">
    <input type="text" value="Comment..." />

    </div>  
    
    </div> 


    );
};
export { Comment };


