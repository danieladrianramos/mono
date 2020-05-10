const listKey = "searchLog";
const lastSearch = "lastSearch";

export default {
    set(type, value, result) {
        let valueInStorage = localStorage.getItem(listKey);
        let list = {};
    
        if (valueInStorage) {
            list = JSON.parse(valueInStorage);
        }

        list[type +"_"+ value] = result;

        localStorage.setItem(listKey, JSON.stringify(list));

        // Save last search display it after refresh
        localStorage.setItem(lastSearch, JSON.stringify(result));

        return list;
    },
    getAll() {
        return JSON.parse(localStorage.getItem(listKey));
    },
    getByKey(key) {
        let list = JSON.parse(localStorage.getItem(listKey));

        // Save last search display it after refresh
        localStorage.setItem(lastSearch, JSON.stringify(list[key]));

        return list[key];
    },
    getLastSearch() {
        return JSON.parse(localStorage.getItem(lastSearch));
    }
}