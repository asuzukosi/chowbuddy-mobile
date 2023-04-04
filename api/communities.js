import axios from 'axios'
import BASE_URL from './base'


export const getAllCommunitiesOfAUser = (customerId) => {
    // get all communities a user belongs to
    axios.get(BASE_URL + "/customers/" + customerId + "/my_communities/")
         .then((response) => {
            return response.data
         })
         .catch((err) => {})
}

export const getAllCommunities = () =>{
    // get all communites
    axios.get(BASE_URL + "/communities/")
         .then((response) => {
            return response.data
         })
         .catch((err) => {})


}

export const getSuggestedCommunities = (customerId) => {
    // get all communities suggested for a user
    axios.get(BASE_URL + "/customers/" + customerId + "/suggested_communities/")
         .then((response) => {
            return response.data
         })
         .catch((err) => {})
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

export const getAllPostsOnACommunity = (communityId) => {
    // get all posts in a community
    axios.get(BASE_URL + "/posts/?community=" +communityId)
         .then((response) => {
            return response.data
         })
         .catch((error) => {
            console.error(error)
         })
}


export const makePostOnCommunity = (text, image, userId,communityId) => {
    // make a post on a community
    
    var bodyFormData = new FormData();
    bodyFormData.append("text", text)
    bodyFormData.append("image", image)
    bodyFormData.append("community", communityId)
    bodyFormData.append("author", userId)

    axios.post(BASE_URL + "/posts/", bodyFormData, headers=FormData.headers())
         .then((response)=>{
            return response.data
         }).catch((error)=>{
            console.log(error)
         })

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