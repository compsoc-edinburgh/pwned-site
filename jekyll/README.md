# Running locally

In order to compile the assets and run `Jekyll` locally you need to follow those steps:

1. Run `bundle exec jekyll serve` in this directory
2. If there are dependency issues, run `bundle check`, then `bundle update`.
3. Open `localhost:4000` in your web browser, or serve in your own php server.


TIP TO MAKE YOUR LIFE EASIER:
Recommend to keep a copy of the original `Gemfile.lock`. When you update the dependencies in your local machine, this will create a lot of new files which the server machine cannot accommodate (too outdated).