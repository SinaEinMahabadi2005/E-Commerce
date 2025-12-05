const fetchData=async(url,options={})=>{
    try {
        const response=await fetch(import.meta.env.VITE_API_URL+ url,options);
        if(!response.ok) throw new Error('Network response was not ok');
        const data=await response.json();
        return data
    } catch (error) {
        return {success:false,message:error.message};
    }
}

export default fetchData;