

//divide  array into until same index
function mergesort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    //find mid element
    const mid=Math.floor(arr.length/2)

    //divide into two half
    const lefthalf=arr.slice(0,mid)
    const righthalf=arr.slice(mid)

    //recursive function 
    const dividedleft=mergesort(lefthalf)
    const dividedright=mergesort(righthalf)
    // return merge function
    return merge(dividedleft,dividedright)
}
//merge sorted sub array
function merge(left,right)
{
    let temp=[]
    let leftindex=0
    let rightindex=0

    while(leftindex < left.length && rightindex < right.length)
    {

        //add sorted elemenet
        if(left [leftindex] < right [rightindex])
        {
            temp.push(left[leftindex])
            leftindex++
        }
        else
        {
            temp.push(right[rightindex])
            rightindex++
        }

        //remaining elements concat
       
    }
    temp= temp.concat(left.slice(leftindex),right.slice(rightindex))
    return temp
}


//function call

const arr=[1,9,2,8,3,7,4,6,5]
console.log(arr.length)

const sortedarray= mergesort(arr)

console.log(sortedarray)