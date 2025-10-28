A Git submodule is essentially a repository inside another repository. It lets you include another Git project as a dependency, while keeping its history separate.

cd path/to/Repo1
git submodule add https://github.com/username/simpleLibrary.git simpleLibrary
git submodule update --init --recursive
git add .gitmodules simpleLibrary
git commit -m "Add simpleLibrary submodule"
