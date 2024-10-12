function TwoSum(arr, target){
    var left = 0;
    var right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [left, right];
        }else if (sum < target){
            left++;
        }else{
            right--;
        }
    }

    return -1;
}

function MergeSortedArrays(arr1, arr2){
    let result = [];
    let p1 = 0;
    let p2=0;

    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] < arr2[p2]){
            result.push(arr1[p1]);
            p1++;
        }else{
            result.push(arr2[p2]); 
            p2++;
        }
    }

    while(p1 < arr1.length){
        result.push(arr1[p1]);
        p1++;
    }

    while(p2 < arr2.length){
        result.push(arr2[p2]);
        p2++;
    }

    return result;
}

function main(){
    let arr = [2,7,11,15];
    let target = 9;
    console.log(TwoSum(arr, target));

    let arr1 = [1,3,5,7];
    let arr2 = [2,4,6,8];
    console.log(MergeSortedArrays(arr1, arr2));
}