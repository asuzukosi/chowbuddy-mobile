import axios from 'axios'
import BASE_URL from './base'


export const getAllCommunitiesOfAUser = (customerId) => {
    // get all communities a user belongs to
   const communities = axios.get(BASE_URL + "/customers/" + customerId + "/my_communities/")
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return communities
}

export const getAllCommunities = async () =>{
    // get all communites
    const communities = await axios.get(BASE_URL + "/communities/")
         .then((response) => {
            return response.data;
         })
         .catch((error) => {
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })

    return communities


}

export const getSuggestedCommunities = async (customerId) => {
    // get all communities suggested for a user
    const communities = axios.get(BASE_URL + "/customers/" + customerId + "/suggested_communities/")
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return communities
}

export const createCommunity = (name, description, location, image, created_by) => {
    // create a new community
    var bodyFormData = new FormData();
    bodyFormData.append("name", name)
    bodyFormData.append("description", description)
    bodyFormData.append("location", location)
    bodyFormData.append("image", image)
    bodyFormData.append("created_by", created)

    axios.post(BASE_URL + "/communities/", bodyFormData, headers=FormData.headers())
         .then((response) => {
            return response.data
         }).catch((error) => {
            console.error(error)
         })
}

export const getAllPostsOnACommunity = async (communityId) => {
    // get all posts in a community
    const posts = await axios.get(BASE_URL + "/posts/?community=" +communityId)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return posts
}


export const makePostOnCommunity = async (text, userId,communityId) => {
    // make a post on a community
   const post = axios.post(BASE_URL + "/posts/", {text: text, author: userId, community: communityId})
         .then((response)=>{
            return response.data
         }).catch((error)=>{
            console.error(error);
            console.log(error.response.data);
            console.log(error.response.status);
            return null;
         })
   return post;

}


export const deletePostOnCommunity = (postId)=>{
    // delete a post on a community
    axios.delete(BASE_URL + "/posts/" + postId + "/")
         .then((response)=>{
            return response.data
         })
         .catch((error)=>{
            console.log(error)
         })
}