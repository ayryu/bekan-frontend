import axios from 'axios'
const baseUrl = '/api/posts'

  const getAll = () => {
      const request = axios.get(baseUrl);
      return request.then(response => response.data);
  }

  const getPostByID = (id) => {
    const request = 
    axios.get(`${baseUrl}/${id}`)
      return request.then(response => response.data)
  }
  
  const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    console.log('What is returned from create', request.then(response => response.data))
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

    const deletePost = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    console.log('What is returned from deletePost', request.then(response => response.data))
    return request.then(response => response.data)
  }
  
  export default { 
    getAll,
    getPostByID, 
    create, 
    update,
    deletePost 
  }