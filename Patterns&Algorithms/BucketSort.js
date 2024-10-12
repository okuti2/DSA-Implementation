function BucketSort(arr){
    

}

function InsertionSort(arr){
    for(let i = 1; i< arr.length; i++){
        let current = arr[i];
        let j;
        for(j=i; j>0 && arr[j-1] > current; j--){
            arr[j] = arr[j-1];
        } 
        arr[j] = current
    }
}