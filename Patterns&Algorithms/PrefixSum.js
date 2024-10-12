function PrefixSum(numsArray){
    var pre = 1;
    var post = 1;
    var prefixSum = [];

    for(let i=0; i<numsArray.length; i++){
        prefixSum[i] = pre;
        pre += numsArray[i];
    }

    for(let i=numsArray.length-1; i>=0; i--){
        prefixSum[i] += post;
        post += numsArray[i];
    }

    return prefixSum;
}