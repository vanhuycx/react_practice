def subsetA(nums):
  n = len(nums)
  nums.sort(reverse=True)
  total = sum(nums)
  current = 0
  ans = []
  for i in range(n):
    current += nums[i]
    ans.append(nums[i])
    if 2 * current > total:
      break
  
  return ans

print(subsetA([3,7,5,6,2]))
print(subsetA([2,3,4,4,5,9,7,8,6,10,4,5,10,10,8,4,6,4,10,1]))