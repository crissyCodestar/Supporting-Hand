
const donorsKey = 'ef4uju946azk';
const API = `https://cors-anywhere.herokuapp.com/https://api.donorschoose.org/common/json_feed.html?partiallyFunded=yes`;
// let zipCode = `11206` keywords=${zipCode}&

export function defaultDonors(){
  let url = API;

  return fetch(url,{
    headers: {
      Authorization: `Bearer ${donorsKey}`
    }
  }).then( (response) => response.json()).then((data) => {
    console.log(data.proposals);
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
