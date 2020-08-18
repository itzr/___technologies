### Using Docker

Unless the volume is mapped to local, when the container dies, the data is lost.

#### Getting Started Issues

MacOS Problem:

“With macOS Catalina, you can no longer store files or
 data in the read-only system volume, nor can you write
  to the “root” directory ( / ) from the command line, 
  such as with Terminal.”

Cause: macOS Catalina runs in a read-only system volume, separate from other files on your Mac. 
 
Source: https://medium.com/@bryantjiminson/fixing-data-db-not-found-error-in-macos-x-when-starting-mongodb-d7b82abb2479

# Connecting to Mongo URI

- Don't forget to URL Encode your password!
