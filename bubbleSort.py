def bubbleSort(array):
    i = len(array) - 1
    flag = True

    while(flag == True):
        flag = False
        j = 0

        while(j < i):
            if(array[j] > array[j + 1]):
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

                flag = True

            j += 1

        i -= 1

    return array

array = [10, 2, 3, 5, 7, 1, 0]
sortedArray = bubbleSort(array)

for num in sortedArray:
    print(num, end = ", ")