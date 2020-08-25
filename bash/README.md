# GENERAL

- checking logs
    - docker containers (php / node / etc)
    - other
- alias
- chown
- grep (used to search text)
- Variable Substition: https://tldp.org/LDP/abs/html/varsubn.html
- Filepath / echo https://golang.org/pkg/path/filepath/#Match
- symlink: 'ln -s source_file symbolic_link'
- service OR 'brew services' (if Homebrew)
- ls -l (explained)
- syslog:  unix tool, which routes logs based on both severity (info/warn/crit...) and facility (auth/cron/kern...).
- eval: see below
- make & makefiles: https://www.gnu.org/software/make/manual/html_node/Introduction.html


## GENERAL DEBUGGING

Command not found typically results from 2 cases:

    an executable not having execute permissions for your user or group
    an executable not belonging to a folder listed in PATH variable , or the opposite - PATH variable that does not contain the location of your executable.

As have been solved in the comments , your case is #2. For future readers, the solution is as such:

    open your shell's configuration file in any text editor. If your shell is bash open ~/.bashrc , if your shell is zsh open ~/.zshrc. Note that ~ refers to your home directory.
    Add line export PATH="$PATH:/usr/sbin" . Note, that /usr/sbin is just an example, your location might be different.
    Save the file, exit and run source ~/.zshrc or source ~/.bashrc. Note, that for shells such as ksh or dash you will need to use . ~/.bashrc since source command is bashism and is not portable

...
BUT
...


The service command is specific to certain Linux distributions. It is not used on macOS.

If you installed MySQL through Homebrew, you can start and stop it using the commands:

brew services start mysql
brew services stop mysql

#### eval

eval is part of POSIX. Its an interface which can be a shell built-in.

Its described in the "POSIX Programmer's Manual": http://www.unix.com/man-page/posix/1posix/eval/

eval - construct command by concatenating arguments

It will take an argument and construct a command of it, which will be executed by the shell. This is the example of the manpage:

1) foo=10 x=foo
2) y='$'$x
3) echo $y
4) $foo
5) eval y='$'$x
6) echo $y
7) 10

In the first line you define $foo with the value '10' and $x with the value 'foo'.
Now define $y, which consists of the string '$foo'. The dollar sign must be escaped with '$'.
To check the result, echo $y.
The result will be the string '$foo'
Now we repeat the assignment with eval. It will first evaluate $x to the string 'foo'. Now we have the statement y=$foo which will get evaluated to y=10.
The result of echo $y is now the value '10'.
