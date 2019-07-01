workflow "New workflow" {
  on = "push"
  resolves = ["4 - Heroku Deploy"]
}

action "1 - Travis CI Build and Test" {
  uses = "travis-ci/actions@master"
  secrets = [
    "TRAVIS_TOKEN",
  ]
}

action "2 - Heroku Login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
  needs = "1 - Travis CI Build and Test"
}

action "3 - Heroku Push" {
  uses = "actions/heroku@master"
  needs = "2 - Heroku Login"
  args = "container:push -a calm-fortress-1234 web"
  secrets = "HEROKU_API_KEY"
}

action "4 - Heroku Deploy" {
  uses = "actions/heroku@master"
  needs = "3 - Heroku Push"
  args = "container:release -a calm-fortress-1234 web"
  secrets = "HEROKU_API_KEY"
}
