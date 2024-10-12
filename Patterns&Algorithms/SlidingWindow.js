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