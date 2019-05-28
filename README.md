fetch: https://github.com/BzenkoSergey/subtree.git

fetch submodule: yarn run pull-submodules

run: yarn install

run: lerna bootstrap

# Dev
	run: yarn run start

# Prod
	run: yarn run build

# Release
	run: yarn run release