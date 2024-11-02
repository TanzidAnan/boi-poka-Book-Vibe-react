const getStroedReadList = () =>{
    const strodListStr =localStorage.getItem('read-list');
    if(strodListStr){
        const strodList =JSON.parse(strodListStr)
        return strodList
    }
    else{
        return [];
    }
}


const AddToStoredReadList =(id) =>{
    const storedList =getStroedReadList();
    if(storedList.includes(id)){
        console.log(id,'all redy added')
    }
    else{
        storedList.push(id);
        const strodListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list',strodListStr)
    }
}

export {AddToStoredReadList}