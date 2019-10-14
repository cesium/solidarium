require 'jekyll'

task :default => [:develop]

desc "Builds the website"
task :build => :clean do
  Jekyll::Commands::Build.process(profile: true)
end

desc "Starts local server"
task :develop do
  Jekyll::Commands::Serve.process({})
end

desc "Cleans the working directory"
task :clean do
  Jekyll::Commands::Clean.process({})
end
