const fechUsers = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
         if(!users){
            throw new Error("Fail To Fetch")
         }
        return users;
    }
    catch(error){
return <p>
    no users 
    <p>
        please try later
    </p>
</p>
    }

    

}
export default fechUsers 