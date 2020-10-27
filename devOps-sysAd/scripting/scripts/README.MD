# COMMANDS IN deployment.sh

## LANG 

- Most UNIX systems use the LANG variable to specify the desired locale but you can use also the setlocale function.
- A locale defined the default encoding for the text file.
- `locale -a` (note different to `local e`)
    - local - Postfix local mail delivery
    - locale - Displays information about the current locale, or a list of all available locales

##### Locale

- A locale is a set of environmental variables 
that **defines the language, country, and character encoding settings** 
(or any other special variant preferences) 
for your applications and shell session on a Linux system. 

- These environmental variables are used by system 
libraries and locale-aware applications on the system.

##### LANG=C

It forces applications to use 
the default language for output, 
and forces sorting to be bytewise.

https://superuser.com/questions/334800/lang-c-is-in-a-number-of-the-etc-init-d-scripts-what-does-lang-c-do-and-why

## ECHO

Outputs the strings it is being passed as arguments.

### ECHO (15 use cases)

#### ECHO -E

The ‘-e‘ option in Linux acts as
interpretation of escaped characters that are **backslashed**.

- Using \b removes whitespace
    - `echo -e "Tecmint \bis \ba \bcommunity \bof \bLinux \bNerds" `
- Using \n creates new lines
    - `echo -e "Tecmint \nis \na \ncommunity \nof \nLinux \nNerds" `
- Using \t adds a       horizontal      tab
- Using \v adds vertical tab spaces
    - `echo -e "\vTecmint \vis \va \vcommunity \vof \vLinux \vNerds" `
And More.........

#### ECHO -E "${@}"

$@ passes all command line arguments

$@ expands to the positional arguments 
passed from the caller to either a function or a script. 

 When the expansion occurs within double quotes, 
 each parameter expands to a separate word. 
 That is, "$@" is equivalent to "$1" "$2"
 
 When there are no positional parameters, 
 "$@" and $@ expand to nothing (i.e., they are removed).
 
-Example: `./expansion-loop.sh hello world 'Im ian'`
- Result: 
```
Values of "$*":
Arg #1= hello-world-Im ian
Values of "$@":
Arg #1= hello
Arg #2= world
Arg #3= Im ian
```
