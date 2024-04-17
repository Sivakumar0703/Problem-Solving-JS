
// Write a function to remove duplicates from an array.

const ary = [8,1,3,7,4,2,8,9,16,27,3,31,17,0,4];

function removeDuplicate(array){
    // mark every repeated number as null
    for(let i=0; i<array.length; i++){
        if(array[i] !== null){
            for(let j=i+1; j<array.length; j++){
                if(array[i] == array[j]){
                    array[j] = null;
                }
            }
        }
    }

    let idx = 0;
    // push the null to the end of the array
    for(let i=0; i<array.length; i++){
        if(array[i] != null){
            array[idx++] = array[i];
        }
    }

    array.length = idx;

    return array
}

console.log(ary , "given array");
console.log(removeDuplicate(ary) , "after removing duplicates");