import React from "react";
import ReactDOM from 'react-dom';
import A_headshot from '../../img/a-headshot.png'
import Wife from '../../img/tree_imgs/wife.png';
import Son_a from '../../img/tree_imgs/son-a.png';
import Wife_A from '../../img/tree_imgs/wife-a.png';
import Daughter_A from '../../img/tree_imgs/daughter-a.png';
import Daughter_B from '../../img/tree_imgs/daughter-b.png'
import Kid_A from '../../img/tree_imgs/kid-a.png';

const Family_tree = (props) => {


    return (
        
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
                      <center><img src={A_headshot}/></center>
                    </div>
                    <div className="tree_name_tag">
                      Adam <br/> Donatelli
                    </div>
                    </div>
                </td>
                <td className="family_member_td">
                
                  <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src={Wife}/></center>
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
                      <center><img src={Son_a}/></center>
                    </div>
                    <div className="tree_name_tag">
                      John <br/> Donatelli
                    </div>
                    </div>
                  
                    <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src={Wife_A}/></center>
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
                      <center><img src={Daughter_A}/></center>
                    </div>
                    <div className="tree_name_tag">
                      Shawanda <br/> Donatelli
                    </div>
                    </div>
                </td>

                <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src={Daughter_B}/></center>
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
                      <center><img src={Kid_A}/></center>
                    </div>
                    <div className="tree_name_tag">
                      Vanessa <br/> Donatelli
                    </div>
                    </div>
        </td>
        
        <td className="family_member_td">
                   <div className="tree_profile_wrapper">
                    <div className="tree_img circle_img">
                      <center><img src={Kid_A}/></center>
                    </div>
                    <div className="tree_name_tag">
                      Sally <br/> Donatelli
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



    
    );
};
export { Family_tree };


