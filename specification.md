## For version 0.1, we will just inline the html files where directed. 

### Restrictions - 
  - Cleaving will only be allowed outside tags.
  - There can be many entry points, but they must be within a folder in the root named `pages`
  - The source, or pages, must be indicated in the `cleave-html-config.json` file as an array.
  - The destination folder must be indicated in the `cleave-html-config.json` file as a string.

### Let's say the folder structure is 
```
root
  - pages //folder
    - index.html
    - header.html
  - static //folder
  - cleave-html-config.json
```  
  
`header.html`:
```
<head>
  <title> Title </title>
  ...
</head>
```

`index.html`:
```
<html>
  <!-- cleave ./header.html -->
  <body>
    ...
  </body>
</html>
```

### cleave-html-config.json
```
{
  src: [
    "index.html"
  ],
  dst: [
    "static"
  ]
}
```

### cleave-html would compile this to
```
<html>
  <head>
    <title> Title </title>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```
