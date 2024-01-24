## editing the website

Go into `./jekyll`, change any files as needed. Recommend copying the folder to your machine and hosting a php server on the built static site as you go along.

## building the website

1. **ALWAYS** build from the project root (the directory containing this README) when running `./build_site.sh`.
2. Running `./build_site.sh` builds your changed Jekyll to the static `_site`.
3. docker-compose down
4. docker-compose build
5. docker-compose up -d

That's it! Have fun :)
