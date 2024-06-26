export const value_converter = (value) => {
  if(value >= 100000000){
    return Math.floor(value / 1000000000) + "B";
  }
  else if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } 
  // else if (value == undefined) {
  //   return 500;
  // } 
  else {
    return value;
  }
};

export const fetchDataFromApi = async (query) => {

  const url = `https://youtube138.p.rapidapi.com/${query}&hl=en&gl=IN`;
  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    // if(response.status == 429) throw "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/Glavier/api/youtube138";
    if(response.status == 429) throw "Sorry, I have exceeded my MONTHLY quota for Requests on my current plan, BASIC.   BY Rapid API";
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    // console.error(error);
    throw error
  }
};
