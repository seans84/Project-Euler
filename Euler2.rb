sum = 0
i = 0
x = 0
y = 1

while y < 4000000
  i = x + y
  x = y
  y = i
  if i % 2 == 0
    sum += i 
  end
end

puts sum
