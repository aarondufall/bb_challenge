get '/' do
  puts "[LOG] Getting /"
  puts "[LOG] Params: #{params.inspect}"
  @words = read_words
  erb :index
end

def read_words
  words = []
 f = File.open(File.join(APP_ROOT, "app/input.txt"), "r")
 f.each_line do |line|
   words << line
 end
 words
end
