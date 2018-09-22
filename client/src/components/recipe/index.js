import React from "react";
import ReactDOM from 'react-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Contribution_subnav } from '../common/network_components/contributions_subnav';

import { Comment } from '../common/network_components/comment';


 export default class Recipe extends React.Component {

	render (){
		return (
			<div id="page-content-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
					
					  <Profile_identifier/>

					  <Contribution_subnav/>
					  
					  <div id="page_title">
					   <h3>Enchiladas</h3>
					   </div>
					  
					  <div className="content_block">
					   <h4>Ingredients</h4>
						<ul className="list_style_a">
						  <li>Tortillas</li>
						  <li>1 can of cream of mushroom soup</li>
						  <li>1 can green chili</li>
						  <li>Garlic</li>
						  <li>Cooking Oil</li>
						  <li>Love</li>
						</ul>
					   </div>
					   {/* END CONTENT_BLOCK  */}
					  
					 <div id="thumbnail_list_wrapper">
					   
					   <div className="column_flex_container lg_thumbnail">
						  <div className="thumbnail_title">
							<h4>Step 1</h4>
						  </div>
						  <div className="thumnail_img">
							<img src="img/in_kitchen_1.jpg"/>
						  </div>
						 <div className="thumbnail_description">
						   <p>Mix the cream of mushroom together with the green chili, and shredded cheese. Let sit for 3.48 minutes. </p>
						 </div>
					   </div> 
					   {/* end thumbnail_container */}
					  
					   <div className="column_flex_container lg_thumbnail">
						  <div className="thumbnail_title">
							<h4>Step 2</h4>
						  </div>
						  <div className="thumnail_img">
							<img src="img/kitchen_2.jpg"/>
						  </div>
						 <div className="thumbnail_description">
						   <p>Use a oven safe pot.  Put the first layer of tortillas (2 layers) and poor some of the inchilada sause over the layer of tortillas. Poor in a layer of graded cheese over the sauce. Reapeat this process until the entire pot is filled to the top. At the very end be sure to poor a good layer of cheese as the last layer</p>
						 </div>
					   </div> 
					   {/* end thumbnail_container */}
					  
					   <div className="column_flex_container lg_thumbnail">
						  <div className="thumbnail_title">
							<h4>Step 3</h4>
						  </div>
						  <div className="thumnail_img">
							<img src="img/kitchen_1b.jpg"/>
						  </div>
						 <div className="thumbnail_description">
						   <p>Once the inchiladas have been in the oven at 450 degrees for 40min, it is ready to surve.  just be sure to share. </p>
						 </div>
					   </div> 
					   {/* end thumbnail_container */}
					  
					  
					   <div className="column_flex_container lg_thumbnail">
						  <div className="thumbnail_title">
							<h4>Step 4</h4>
						  </div>
						  <div className="thumnail_img">
							<img src="img/kitchen_2b.jpg"/>
						  </div>
						 <div className="thumbnail_description">
						   <p>After you have eaten your dish and you are relaxing, be sure to put a dollar into my piggy bank.</p>
						 </div>
						
					 </div>
					 {/* end thumbnail_list_wrapper */}

					<Comment/>
					
					</div>
					{/* end col-lg-12 */}
				</div>
				{/* end row  */}
			</div>
			{/* end container-fluid  */}
		</div>
		</div>
		
	);
  }
}


