function binarySearch(Arr, target){
    let l= 0;
    let r = Arr.length -1;

    while(l<-right){
        let mid = Math.floor((l+r)/2);
        if(Arr[mid] === target){
            return mid;
        }
        if(Arr[mid] < target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return -1;
}

function main(){
    let Arr = [1,2,3,4,5,6,7,8,9,10];
    let target = 5;
    console.log(binarySearch(Arr, target));
}

main();