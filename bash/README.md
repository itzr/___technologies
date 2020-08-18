# GENERAL

- alias
- chown
- grep (used to search text)
- Variable Substition: https://tldp.org/LDP/abs/html/varsubn.html
- Filepath / echo https://golang.org/pkg/path/filepath/#Match
- symlink: 'ln -s source_file symbolic_link'
- service OR 'brew services' (if Homebrew)
- ls -l (explained)

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

