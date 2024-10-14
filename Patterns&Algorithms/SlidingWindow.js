function SlidingWindow(arr, k){
    let maxSum = 0;
    let windowSum = arr.slice(0, k).reduce((a,b)=> a+b,0);

    if(arr.length < k) return 0

    for(let i=0; i<arr.length - k; i++){
        windowSum = windowSum - arr[i] + arr[i+k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

function lengthOfLongestSubstringTwodistinct(str){
    var result = 0
    var counts = new Map();
    var left = 0

    for(let right=0; right<str.length; right++){
        counts.set(str[right], 1+(counts.get(str[right]) || 0))

        while(counts.size > 2){
            if(counts.get(str[left]) > 1){
                counts.set(str[left], 1- (counts.get(str[right]) || 0))
            }else{
                counts.delete(str[left])
            }
            left++
        }
        result = Math.max(result, right-left+1)
    }
    return result
}