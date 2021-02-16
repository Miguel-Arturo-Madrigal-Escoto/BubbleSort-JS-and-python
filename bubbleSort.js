function bubbleSort(array){
    let i = array.length, j;
    let flag;

    do{   
        flag = false;
        j = 0;

        while(j < i){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                flag = true;
            }
            j++;
        }
        i--;
    }while(flag);

    return array;
}

const array = [4, 6, 7, 1, 9, 5, 8];
const sortedArray = bubbleSort(array);

console.log("Sorted array: ");
sortedArray.forEach(number => {
    console.log(number);
});