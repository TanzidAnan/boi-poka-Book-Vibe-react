import { toast } from "react-toastify";

const getStroedReadList = () => {
    const strodListStr = localStorage.getItem('read-list');
    if (strodListStr) {
        const strodList = JSON.parse(strodListStr)
        return strodList
    }
    else {
        return [];
    }
}


const AddToStoredReadList = (id) => {
    const storedList = getStroedReadList();
    if (storedList.includes(id)) {
        console.log(id, 'all redy added')
    }
    else {
        storedList.push(id);
        const strodListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', strodListStr);
        toast('Book added')
    }
}

const getStrodeToWishList = () => {
    const strogeAddStr = localStorage.getItem('wish-list');
    if (strogeAddStr) {
        const sreogeAdd = JSON.parse(strogeAddStr);
        return sreogeAdd;
    }
    else {
        return [];
    }
}

const WishListAddToDataStroge = (id) => {
    const WishListStrog = getStrodeToWishList();
    if (WishListStrog.includes(id)) {
        console.log(id, 'Add getStrodeToWishList')
    }
    else {
        WishListStrog.push(id);
        const strogeAddStr = JSON.stringify(WishListStrog);
        localStorage.setItem('wish-list', strogeAddStr);
    }
}

export { AddToStoredReadList, WishListAddToDataStroge, getStroedReadList }