import React from "react";
import ReactDOM from 'react-dom';
import { Profile_identifier } from '../common/network_components/profile_identifier';
import { Family_tree } from '../../components/family_tree';



export default class Network_FamilyTree extends React.Component {

	render (){
		return (
		<div>
			<div className="section-wrap-b floatDown">
				
                <Profile_identifier/>
                     
<div className="family_tree_wrapper wrapper_a">

<table className="table table-hover">
          
            <tbody>
              <tr>
                <td>

                </td>
                <td>
                </td>
                <td className="family_member_td">
                
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/a-headshot.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Adam <br/> Donatelli
                    </div>
                    </div>
                </td>
                <td className="family_member_td">
                
                  <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/wife.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Jesicca <br/>  Josa
                    </div>
                  </div>
                
                </td>
                
                <td></td>
                <td></td>

              </tr>
            </tbody>
  </table>



<table className="table table-hover">
          
            <tbody>
                <td>

                </td>
                <td>
                </td>
                
                <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/son-a.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      John <br/> Donatelli
                    </div>
                    </div>
                  
                    <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/wife-a.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Anna <br/> Manuska
                    </div>
                    </div>
                  
                </td>
                
                <td className="gap_cell">
                </td>
                
                
                
                 <td className="family_member_td">
                
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/daughter-a.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Shawanda <br/> Donatelli
                    </div>
                    </div>
                </td>

                <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/daughter-b.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Vales <br/> Donatelli
                    </div>
                    </div>
                </td>
                
                <td></td>
                <td></td>

            </tbody>
  </table>


  <table>
    <tbody>
      
         <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/kid-a.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Vanessa <br/> Donatelli
                    </div>
                    </div>
        </td>
        
        <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src="img/tree_imgs/kid-a.png"/></center>
                    </div>
                    <div className="tree_name_tag">
                      Vanessa <br/> Donatelli
                    </div>
                    </div>
        </td>
        
        <td className="family_placeholder">
        </td>
        
        <td className="family_placeholder">
        </td>
        
        <td className="family_placeholder">
        </td>
        
     
    </tbody>
  </table>


</div>


				
			</div>	
		</div>
	);
  }
}


