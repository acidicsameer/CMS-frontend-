import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {   
    
    
    const navigate=useNavigate()  





      const addBlog= async(e)=>{
           e.preventDefault()
         const formData= new FormData(e.target) 
        //  console.log(formData)
       
        //  const data={
        //      title :formData.get("title"),
        //      subTitle:formData.get("subTitle"),
        //      description:formData.get("description"),

        //  } 
        const data=Object.fromEntries(formData)
      const response= await axios.post ("https://backendcms.up.railway.app/blog",data)  
      if(response.status==201)
      {
        navigate("/")
      }

           
      } 

  return (
  <>
<form  onSubmit={addBlog}
  className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center"> Create Blogs</h1>

  <input
    type="text" 
    name="title" 
   
    placeholder="Enter Title"
    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text" 
    name='subTitle' 
    
    placeholder="Enter Subtitle"
    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <textarea
    placeholder="Enter Description"
    rows="4"  
  
    name='description'
    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  ></textarea>

  <button
    type="submit"  
    
    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
  >
    Submit
  </button>
</form>
    
  </>
  )
}

export default CreateBlog
