const getStroedReadList = () =>{

}


const AddToStoredReadList =(id) =>{
    const storedList =getStroedReadList();
    if(storedList.includes(id)){
        console.log(id,'all redy added')
    }
    else{
        storedList.push(id)
    }
}