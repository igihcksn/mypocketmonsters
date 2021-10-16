# My Pokemon Dex

### Installation

This is documentation from exploration project using some requirement from Tokopedia Recruitment Team, Hope can running well either in local and production link.

Install the dependencies and devDependencies and start the server.

```sh
$ yarn install
$ yarn run start
```
## How to set up your local environment

#### 1. Clone App

- Make a new folder and open the terminal there.
- Write the following command and press enter.

```
  $ git clone https://github.com/igihcksn/mypocketmonsters.git
```

#### 2. Install Yarn

- Move inside the cloned folder.
- Write the following command and press enter to download all required node modules.

```
$ yarn install
```

#### 3. Run Locally

- While you are still inside the cloned folder, write the following command to run the website locally.

```
  $ yarn run start
```

## How to Contribute

To start contributing, follow the below guidelines:

**1.** Fork [this](https://github.com/igihcksn/mypocketmonsters.git) repository.

**2.** Follow the Environment setup above.

**3.** Checkout into the dev branch. Create a branch from the dev branch with `git checkout -b branchname` where the name is something descriptive about the issue your branch will fix.

     $ git checkout -b <branch_name>

**4.** Make your changes, and test them to make sure they work.

**5.** Add and commit your changes

     $ git add . && git commit -m "<your_message>"

**6.** Push Code to Github under your branch

     $ git push origin <your_branch_name>

**7.** When you're ready to submit your pull request, merge the latest version of dev, to make sure your branch is up to date:

```
git checkout dev
git pull origin dev
git checkout <your_branch_name>
git merge dev
```

**8.** Resolve any merge conflicts if they exist, test to make sure your feature branch still works correctly, and then `git push origin <your_branch_name>`

**9.** On Github, create a pull request from your feature branch. Always make the PR against the dev branch! Make sure to summarize your changes you made, and if there's anything specific you want reviewed or tested, note that in the PR.

**10.** When approved, your branch will be merged into master and you're done! Thanks for contributing! :)


### Library

| Library | README |
| ------ | ------ |
| @apollo/client | https://github.com/apollographql/apollo |
| @chakra-ui | https://github.com/chakra-ui/chakra-ui |
| @emotion | https://github.com/emotion-js/emotion |

### List API
| Library | README |
| ------ | ------ |
| Mas Ipan graphql-pokeapi | https://github.com/mazipan/graphql-pokeapi |
| Official Poke API | https://pokeapi.co/ |

