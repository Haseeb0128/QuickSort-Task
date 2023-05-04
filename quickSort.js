function quickSort(array)
{
  if(array.length === 1)
  {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for(let i =0; i<array.length - 1; i++)
    {
      if(array[i] < pivot)
      {
        leftArray.push(array[i]);
      }

      else
      {
        rightArray.push(array[i]);
      }
    }

  if(leftArray.length > 0 && rightArray.length > 0)
  {
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)];
  }
  else if(leftArray.lenght > 0)
  {
    return [...quickSort(leftArray),pivot];
  }
  else
  {
    return [pivot,...quickSort(rightArray)];
  }
}

const array = [3,0,2,5,-1,4,1,10,23,15,20,12];

console.log(quickSort(array));