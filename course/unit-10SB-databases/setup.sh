if which brew >/dev/null; then
  brew update
  brew tap homebrew/services
  brew install postgresql
  brew services start postgres
  createdb world
  psql world -f ./world.sql
else
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew update
  brew tap homebrew/services
  brew install postgresql
  brew services start postgres
  createdb world
  psql world -f ./world.sql
fi
