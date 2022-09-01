import React from "react";

import styled from "styled-components";
import pic from "../assets/img/rating.png"
const GYMdiv = styled.div`
  .mainDiv {
    height: 360px;
    width: 91%;
  }
`;

let arr = [
    {
      "user_id": "5X0DiteTsFHK5",
      "gym_name": "WTF: Body Fit Gym",
      "address1": "Sector 8",
      "address2": "C Block",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "latitude": "28.5966034",
      "longitude": "77.3286464",
      "pin": "201301",
      "country": "India",
      "name": "Naresh",
      "free_trial": 1,
      "distance": "203.06",
      "distance_text": "203.06 km",
      "duration_text": "304.59 minutes",
      "duration": "304.59",
      "rating": 0,
      "text1": null,
      "text2": null,
      "plan_name": null,
      "plan_duration": null,
      "plan_price": null,
      "plan_description": null,
      "cover_image": null,
      "gallery": [],
      "type": "gym",
      "description": "Body Fit Gym",
      "status": "active",
      "slug": "WTF-Body-Fit-Gym",
      "category_id": "LfFMRK12Skdln",
      "offer": [],
      "benefits": [],
      "addons": [],
      "total_rating": 0,
      "is_partial": "0",
      "is_cash": 0,
      "category_name": "Luxe",
      "addon_front": null
    },
    {
      "user_id": "FVWxjQktVztQm",
      "gym_name": "WTF: Naresh Sir Gym",
      "address1": "Sector 8",
      "address2": "C Block",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "latitude": "28.5966034",
      "longitude": "77.3286464",
      "pin": "201301",
      "country": "India",
      "name": "Dev Testing",
      "free_trial": 1,
      "distance": "203.06",
      "distance_text": "203.06 km",
      "duration_text": "304.59 minutes",
      "duration": "304.59",
      "rating": 5,
      "text1": null,
      "text2": null,
      "plan_name": null,
      "plan_duration": null,
      "plan_price": null,
      "plan_description": null,
      "cover_image": null,
      "gallery": [],
      "type": "gym",
      "description": "Naresh Sir Gym",
      "status": "active",
      "slug": "WTF-Naresh-Sir-Gym",
      "category_id": "8oTG3rOtE5BAW",
      "offer": [],
      "benefits": [],
      "addons": [],
      "total_rating": 2,
      "is_partial": "0",
      "is_cash": 0,
      "category_name": "Elite",
      "addon_front": null
    },
    {
      "user_id": "GLKdIYAWDS2Q8",
      "gym_name": "WTF: WTF: Gym Arena",
      "address1": "Sector 8",
      "address2": "C Block",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "latitude": "28.5966034",
      "longitude": "77.3286464",
      "pin": "201301",
      "country": "India",
      "name": "Yehoyakhin Nikusha",
      "free_trial": 0,
      "distance": "203.06",
      "distance_text": "203.06 km",
      "duration_text": "304.59 minutes",
      "duration": "304.59",
      "rating": 5,
      "text1": null,
      "text2": null,
      "plan_name": "AR Monthly",
      "plan_duration": "30",
      "plan_price": "1500",
      "plan_description": "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>",
      "cover_image": "https://dry2o5w6nqoyb.cloudfront.net/gym_upload/W6VsdPXPwdlSX/1658305692799-wp7959659.webp",
      "gallery": [],
      "type": "gym",
      "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id q",
      "status": "active",
      "slug": "wtf-gym-arena",
      "category_id": "LfFMRK12Skdln",
      "offer": [],
    }
  ]
const GYM = () => {
  return (
    <GYMdiv>
      {
        arr.map((e,i) => (
            <div key={i} style={{background:"rgb(19,19,19)", marginTop:"30px",padding:"20px",borderRadius:"10px"}} className="mainDiv">
               <p style={{color:"white"}}>{e.gym_name}</p>
               <img src={pic} alt="" />
               <p style={{color:"white"}}>{e.address2}</p>
               <p style={{color:"white"}}>{e.distance_text} away</p>
               <div style={{display:"flex", marginTop:"140px",gap:"300px",marginLeft:"430px"}}>
               <p style={{color:"yellow",fontSize:"20px"}}>₹3600 for 3 months</p>
               <button style={{background:"rgb(146,9,9)", color:"white",borderRadius:"10px"}}>BOOK NOW</button>
               </div>
               
            </div>
        ))
      }
  
    </GYMdiv>
  );
};

export default GYM;
