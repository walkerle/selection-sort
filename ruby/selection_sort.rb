def selection_sort(arr)
  # type your code in here
  # print "arr #{arr}"
  # puts

  sorted_arr = []

  while arr.size > 0 do
    minNum = arr.min # find min value
    # puts "minNum #{minNum}"

    index = arr.index(minNum) # find index of min value
    # puts "index #{index}"

    arr.delete_at(index) # delete value at index (minNum)
    # print "arr #{arr}"
    # puts

    sorted_arr.push minNum # add min value to new array
  end

  # print "sorted_arr #{sorted_arr}"

  return sorted_arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# Create new array variable

# Create loop => while loop
# Find min value of the array
# Find index of the min value
# Remove index from array
# Add min value to new array
