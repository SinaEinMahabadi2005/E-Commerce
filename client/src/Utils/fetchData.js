const fetchData=async(url,options={})=>{
    try {
        const response=await fetch(url,options);
        if(!response.ok) throw new Error('Network response was not ok');
        const data=await response.json();
        return {success:true,data};
    } catch (error) {
        return {success:false,message:error.message};
    }
}

export default fetchData;