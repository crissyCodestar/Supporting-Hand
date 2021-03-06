import {donorsApiKey, donorsApiUrl} from '../../../keys';


const donorsKey = donorsApiKey;
const API = donorsApiUrl ;


export function defaultDonors(){
  let url = API;

  return fetch(url,{
    headers: {
      Authorization: `Bearer ${donorsKey}`
    }
  }).then( (response) => response.json()).then((data) => {
     return data.proposals.map((donor)=> ({
       id:donor.id,
       school:donor.schoolName,
       desc:donor.shortDescription,
       cost:donor.costToComplete,
       title:donor.title,
       state:donor.state,
       city:donor.city,
       lat:donor.latitude,
       long:donor.longitude,
       url:donor.proposalURL,
       img: donor.imageURL,
       total:donor.totalPrice,
     }));
   });
 }

export function filterDonors(term){
  let url = API;
  return fetch(url+ `&keywords=${term}`,{
    headers: {
      Authorization: `Bearer ${donorsKey}`
    }
  }).then( (response) => response.json()).then((data) => {
     return data.proposals.map((donor)=> ({
       id:donor.id,
       school:donor.schoolName,
       desc:donor.shortDescription,
       cost:donor.costToComplete,
       title:donor.title,
       state:donor.state,
       city:donor.city,
       lat:donor.latitude,
       long:donor.longitude,
       url:donor.proposalURL,
       img: donor.imageURL,
       total:donor.totalPrice,
     }));
   });
 }
