# Running locally

In order to compile the assets and run `Jekyll` locally you need to follow those steps:

1. Run `.\build_site.sh` in this directory
2. If there are dependency issues, run `bundle check`, then `bundle update`.
3. Make sure that the `Gemfile` has its corresponding packages.
3. Open `localhost:4000` in your web browser


TIP TO MAKE YOUR LIFE EASIER:
Keep a copy of the original `Gemfile.lock`. When updating dependencies, the server machine will keep complaining that such dependecies are too new. Running `bundle update` will solve the problem but it might take a lifetime.