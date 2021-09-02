let myEach = function (collection, callback) {
    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

let myMap = function(collection, callback) {
    let newArray = [];
    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }

    return newArray;
}

let myReduce = function(collection, callback, acc) {
    
    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    let total;
    if (acc) {
        total = acc;
        for (let i = 0; i < newCollection.length; i++) {
            let currentValue = newCollection[i];
            total = callback(total, currentValue);
        }
        return total;
    } else {
        total = newCollection[0];
        for (let i = 1; i < newCollection.length; i++) {
            let currentValue = newCollection[i];
            total = callback(total, currentValue);
        }
        return total;
    }
} 

let myFind = function(collection, predicate) {
    
    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    let result;
    for (let i = 0; i < newCollection.length; i++) {
       if (predicate(newCollection[i]) === true) {
          result = newCollection[i];
          break 
       }
    }
    return result;
}

let myFilter = function(collection, predicate) {

    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    let resultArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            resultArray.push(newCollection[i]);
        }
    }
    return resultArray;
}

let mySize = function(collection) {
    
    let newCollection;
    if (typeof collection === 'object') {
       newCollection = Object.values(collection)
    } else {
       newCollection = collection 
    }

    return newCollection.length;
}

let myFirst = function(array, int = 0) {
    if (int) {
        return array.slice(0, int);
    } else {
        return array[0];
    }
}

let myLast = function(arr, int = 0) {
    if (int) {
        return arr.slice(arr.length - int, arr.length);
    } else {
        return arr[arr.length - 1];
    }
} 

let myKeys = function(obj) {
    return Object.keys(obj);
} 

let myValues = function(obj) {
    return Object.values(obj);
}

let mySortBy = function(array, callback) {
    let newArray = [...array];
    return newArray.sort(function(a,b) {
        if (callback(a) > callback(b)) {
            return 1;
        } else if (callback(b) > callback(a)) {
            return -1;
        } else {
            return 0;
        }
    });
};

let myFlatten = function(collection, shallow, newArray = []) {
    for (let i = 0; i < collection.length; i++) {
        if (Array.isArray(collection[i])) {
            newArray = newArray.concat(myFlatten(collection[i]));
        } else {
            newArray.push(collection[i]);
        }
    }
    return newArray;
}