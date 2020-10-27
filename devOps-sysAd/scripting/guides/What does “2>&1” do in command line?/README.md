https://superuser.com/questions/71428/what-does-21-do-in-command-line

- > redirects stdout to a file
- 2>& redirects file handle "2" (almost always stderr) to some other file handle (it's generally written as 2>&1, which redirects stderr to the same place as stdout).
- &> and >& redirect both stdout and stderr to a file. It's normally written as &>file (or >&file). It's functionally the same as >file 2>&1.
- 2> redirects output to file handle 2 (usually stderr) to a file.

- 2>&1 says to send standard error to where ever standard output is being redirected as well. Which since it's being sent to /dev/null is akin to ignoring any output at all.
