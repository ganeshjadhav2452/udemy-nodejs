let arr = [2,3,62,62,3,63,3,62,36,2]

for(let i = 0;i<arr.length ; i++){
    let current = arr[i];

    for(let j = 0; j<arr.length; j++){
        if(i === j) continue;
        
       
        if(current === arr[j]){
            let k = j

            while(arr[k+1]){
                arr[k] = arr[k+1]
                k++
            }
            arr.pop()
        }
    }
}

console.log(arr)