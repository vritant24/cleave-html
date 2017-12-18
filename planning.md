### Preface:
*Everything shown here is my interpretation of what the program should provide. None of this is final, this is just a place for us
 to solidify what the project should provide and brainstorm how it should be done.*

### Goals of cleave-html:
Provide a program that will accept as input a directory (format of input and output should be discussed further) of
html files and within the target html file (default index.html) will identify non-html tags as external html
modules that will be inlined into the file itself.

### Problems to Consider:
1.)  Recursive and mutually recursive modules will result in forever expanding html. Thus, these cannot be allowed.

### Tool Used to Build Cleave:
*This is going to heavily depend on the overall design of the project. Will decide later.*

### EXAMPLE USE CASE BELOW:
**Input:**
```html
<!-- CleaveDescription.html -->
	<p> Cleave is a tool for creating modular html! </p>
<!-- end of CleaveDescription.html -->

<!-- index.html (target file) -->
	<html>
		<body>
			<p>Welcome to cleave-html</p>
			<CleaveDescription />
		</body>
	</html>
<!-- end of index.html -->
```

**Output: (I don't think we should inline the external modules into the original index.html so for the time being I'm just calling the output/fully-inlined file output.html)**
```html
<!-- output.html (target file) -->
	<html>
		<body>
			<p>Welcome to cleave-html</p>
			<!-- CleaveDescription Module -->
			<p> Cleave is a tool for creating modular html! </p>
		</body>
	</html>
<!-- end of output.html -->
```

### Future Addition Ideas:
*Even for static web pages it may be useful to allow for mappings of data sets to provide easy list creation.
  Depending on how this is implemented we may want to consider adding easy support for storing and mapping data sets.
	This isn't necessary as it can be done by appending nodes to the dom directly within a script tag, but this may be
	worth considering later on.*
