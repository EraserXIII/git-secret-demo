# Precommit Hook POC

## Why use it

We don't want to expose our secret in the repository. For that, we can use git-secret, this tool will encrypt the files we need to hide and the registered developers will be able to decrypt that data in their machines.

## Setup

Follow the installation guide from [git-secret-installation-guide](https://git-secret.io/installation) (I could do it using the Manual option in Git Bash without the PREFIX option)

Then you need to create a gpg pair key for each user. For that we use: `gpg --full-generate-key`. 

Some options will appear in the console, and we follow the default ones: 

* (1) RSA and RSA
* 3072
* 0 = key does not expire

![img_1.png](img_1.png)

After that gpg will ask for personal data such us our name and email. This data will be attached to the key so we can identify it.

We have to deliver each one of this keys to the actual user for him to be able to encrypt and decrypt the hidden files.

## How to use

Ones we have the git-secret installed and the gpg pair keys generated, we can start using git-secret using the following commands:

`git-secret init`: Initialize the git-secret tool in our project.

`git-secret tell {email}}`: Add a user who will be able to access the hidden files.

`git-secret add {filename}}`: Add a file which will be encrypted by git-secret.

git-secret hide

git-secret reveal

* `yarn add -D husky`
* `yarn husky install`
* `yarn install`

## Create a hook

```sh
npx husky add .husky/pre-commit "yarn test"
# husky - created .husky/pre-commit
```
