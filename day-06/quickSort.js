// let array = [7,5,6,21,0,9,32,40,1];
let array = Array.from({length:10}, (_,idx) => Math.floor(Math.random()*100))


function quickSort(ary,start,end){
    
    if(start < end){
        let pivotIndex = setPivotIndex(ary,start,end);
        quickSort(ary,start,pivotIndex-1);
        quickSort(ary,pivotIndex+1,end);
    }
    
}

function setPivotIndex(arr,start,end){
    let left = start;
    let right = end;
    let pivot = arr[start];
    
    while(left < right){
        //  the element is smaller/larger is defined by comparing it with the pivot element
    // larger element in the left and the smaller element in the right will swap it place.
        left = left+1;
        while(left <= right && arr[left] < pivot){
            left++;
        }
        
        while(right >= left && arr[right] > pivot){
            right--;
        }
        
        // left < right means not the pointers are crossed yet
        // allow swap
        if(left < right){
            swap(arr,left,right)
        }
    }
    
    // left > right means the pointer are crossed
    // swap the pivot
    swap(arr,start,right)
    return right
}


function swap(ary,a,b){
  if(a != b){
    ary[a] = ary[a] + ary[b];
    ary[b] = ary[a] - ary[b];
    ary[a] = ary[a] - ary[b];
   }
}
console.log("before sorting",array)
quickSort(array,0,array.length-1)
console.log("after sorting",array);