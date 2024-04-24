
// Explain the concept of merge sort and implement it.

/*
    In merge sort we divide the entire array into sub-arrays then we sort the sub-arrays and merge it to 
get a completly sorted array.
*/

let array = [7,5,6,21,0,9,32,40,1];

function mergeSort(ary,left,right){
    if(left >= right){
        return 
    }
    let middle = left + parseInt((right-left)/2);
    mergeSort(ary,left,middle);
    mergeSort(ary,middle+1,right);
    return merge(ary,left,middle,right);
}

function merge(arr,left,mid,right){
    
    // defining length of sub array
    let sub1_length = mid-left+1;
    let sub2_length = right - mid;
    
    // creating sub array
    let sub1 = [];
    let sub2 = [];
    for(let i=0; i<sub1_length; i++){
        sub1[i] = arr[i+left];
    }
    for(let j=0; j<sub2_length; j++){
        sub2[j] = arr[mid+1+j];
    }
    // setting pointers for sub array1&2
    let i = 0;
    let j = 0;
    let k = left;
    
    // sorting the array
    while(i<sub1_length && j<sub2_length){
        if(sub1[i] <= sub2[j]){
            arr[k] = sub1[i];
            i++; k++;
        } else {
            arr[k] = sub2[j];
            j++; k++;
        }
    }
    
    // check for excess element in sub array1&2
    while(i<sub1_length){
       arr[k] = sub1[i];
       i++; k++; 
    }
    while(j<sub2_length){
       arr[k] = sub2[j];
       j++; k++; 
    }
    
    return arr
    
}


console.log(mergeSort(array,0,array.length-1));