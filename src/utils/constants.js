
export const LOGO ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_AVATAR ="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg ";

export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTE1ZGMzNjFjODUxYTZlODNjYzU2MzQ0YjA1OWU5MSIsIm5iZiI6MTcyMzUzMzMyMC4xMTExODMsInN1YiI6IjY2YmIwNjYwOWMyZTE5YjBkODFhZjgyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qHWRa8d_JOwfKLUwwGqcIsPQ9Gf2V-QlhajOigqCgA0',
    }
  };

export const IMG_CDN = 'https://image.tmdb.org/t/p/w200//';  

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg';

export const SUPPORTED_LANG=[
  {identifier:'eng', name:'English'},
  {identifier:'hindi', name:'Hindi'},
  {identifier:'russian', name:'Russian'},
];

export const AI_API_KEY= process.env.REACT_APP_AI_API_KEY;