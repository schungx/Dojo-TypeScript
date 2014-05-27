Using The Dojo Toolkit (AMD-style) with TypeScript 0.9.5
========================================================


Preamble
--------

Using TypeScript with the Dojo Toolkit is easy with a few tricks to
let the system do what you want.

One of the tricky issues is the fact that all TypeScript files are
compiled into AMD modules (when the "--module amd" option is set,
which it should be in order to use TypeScript with Dojo). If you stay
100% in TypeScript, how do you "bootstrap" the root module?  Turns out
that you need at least *one* pure JavaScript file in order to do that.

Another tricky issue is that of loading non-Dojo custom modules.
In a typical Dojo modularized web application, this is done by mapping
module prefixes into paths. In a TypeScript application, however, you
must also consider the fact that your modules are also written in
TypeScript (or at least some of them). You'd want other TypeScript code
to be able to find your module file (in TypeScript) and figure out the
correct type definitions. This means that you must find a common-point
between the way TypeScript looks for modules and the way Dojo looks for
modules.

As you'll see, there is no easy way to force TypeScript to look for
modules based on prefix (as per Dojo), so you'll either have to live
with using path-relative modules, or put duplicate copies of your
code files in different locations of the directory tree, or define
type definition files for your modules.


I. Prepare Dojo baseUrl and bootstrap
-------------------------------------

In your main HTML file, your Dojo script tag should look like this:

	<script type="text/javascript"
		data-dojo-config="async:true, baseUrl:location.href.substring(0,location.href.lastIndexOf('/')+1)+'path/to/scripts/xyz.js'"
		src="http://ajax.googleapis.com/ajax/libs/dojo/1.9.0/dojo/dojo.js">
	</script>
	
The "baseUrl" setting in DojoConfig creates a path to a script file in
your main scripts directory relative to the HTML file's location.  It
overrides the default path for loading AMD modules (other than modules
under dojo, dijit and dojox) by the Dojo AMD loader.

Mind you that this is probably not the most typeical way to load custom
Dojo modules -- the most typical way is to map a custom prefix (one that
is other than "dojo", "dijit" and "dojox") to a path. However, TypeScript
does not support looking for modules via prefix mapped to a path, so you
must abandon that practice and use path-relative modules.

If you do have a need to organize modules according to prefix, understand
that you'll have to duplicate a *lot* of code files. Essentially,
everywhere you import a module, you have to make sure that a subdirectory
exists, with the same name as the prefix of the module, at the same level
of the TypeScript file that uses that module, and that inside this
subdirectory is a copy of the module's TypeScript file. Otherwise,
TypeScript will complain that it doesn't find your module (since it doesn't
understand that you have "mapped" a path to its prefix).

A simpler way is to generate a ".d.ts" type definition file for your
module, and then use the "/// <reference path="..."/>" syntax to load it.
You will then be able to use that module in TypeScript and TypeScript will
not attempt to locate that module file (which it won't find). This method,
however, necessitates the regeneration of a lot of type definition files
(and remembering to do it!) every time the public API of your module
changes.

JavaScript files compiled from TypeScript source modules in your project
look exactly like a regular Dojo AMD-style module and are loaded
automatically when "required".

If you stay completely within TypeScript and Visual Studio, however, you'll
find that every TypeScript file is compiled into an AMD module (see
"TypeScript setup" below) and there is no way to automatically load the
top-most one (your root module).

The way to "bootstrap" the entire tree of modules is either: (1) write a
simple, vanilla JavaScript script that contains the "require" statement,
or (2) put that "require" statement in a script tag inside your HTML
file. Option (1) is suitable where many pages must load the same scripts.
Option (2) is simpler and suitable for one-page web apps because you
avoid creating yet another JavaScript script file.

Option (1):

	bootstrap.js:  require(["main"]);
	main.html:     <script type="text/javascript" src="bootstrap.js"></script>
	
Option (2):

	main.html:     <script type="text/javascript">require(["main"]);</script>


II. Dojo type definitions and referencing dojo.d.ts
---------------------------------------------------

Common types used in Dojo are defined in the file "dojo.types.d.ts".
You don't normally need to reference this file, since all other Dojo
definition files reference it.  You need it only if you are writing
your own module files to compile into Dojo-style modules.

Basic Dojo modules are defined in the file "dojo.d.ts".  It contains most
of the core functionalities.

To use Dojo, include the following reference in the first lines of your
TypeScript file:

	/// <reference path="dojo.d.ts"/>

To use Dijits, include the following reference in the first lines of your
TypeScript file:

	/// <reference path="dijit.d.ts"/>

To use Dijits together with Dojo:

	/// <reference path="dojo.d.ts"/>
	/// <reference path="dijit.d.ts"/>
	
Some modules are split into their own separate definition files.  For example,
to use dojo/store, you must add another refernece:

	/// <reference path="dojo.d.ts"/>
	/// <reference path="dojo.store.d.ts"/>


III. TypeScript setup
---------------------

You MUST be using TypeScript version 0.9.5 or higher (with generics
support).

When using the command line compiler, use the "--module amd" flag
since Dojo works with AMD-style modules.

Your TypeScript environment must be setup to compile using AMD-style
modules.  In Visual Studio with Web Essentials, you *used* to be able
to set "Use the AMD module" to true under Web Essentials-TypeScript.

New versions of Web Essentials no longer support TypeScript, and you
must now find the settings under Tools-Options-Text Editor-TypeScript.
There does not appear to be a place to change the module style
(defaulted to AMD if you use the built-in TypeScript HTML Application
project template), nor the JavaScript version to be emitted (defaulted
to ES5 if you use the built-in template).  You must exit Visual Studio
and manually edit the project file if these settings are incorrect.
For example, you might want to target ES3 instead of ES5 and so must
edit the project file for TypeScript to emit ES3 JavaScript.

Visual Studio 2013 appears to have much better built-in support of
TypeScript, including a "TypeScript" page in the main project
configuration window.


IV. Using Dojo modules
----------------------

To use a Dojo module, just "import" it:

	/// <reference path="dojo.d.ts"/>
	import array = require("dojo/_base/array");
	array.forEach(...);

compiles into:

	define(["require", "exports", "dojo/_base/array"], function(require, exports, __array__) {
		var array = __array__;
		array.forEach(...);
	});


Directly-callable Dojo modules are supported similarly.  For example:

	/// <reference path="dojo.d.ts"/>
	import ready = require("dojo/ready");
	ready(() => { ... });

compiles into:

	define(["require", "exports", "dojo/ready"], function(require, exports, __ready__) {
		var ready = __ready__;
		ready(function() { ... });
	});


Class-type Dojo modules are also supported.  For example:

	/// <reference path="dojo.store.d.ts"/>
	import Memory = require("dojo/store/Memory");
	var store = new Memory({ data: ... });

compiles into:

	define(["require", "exports", "dojo/store/Memory"], function(require, exports, __Memory__) {
		var Memory = __Memory__;
		var store = new Memory({ data: ... });
	});


V. Defining new modules in TypeScript
-------------------------------------

You can define modules to be used with Dojo in TypeScript.  For
example, the following:

	/// <reference path="dojo.d.ts"/>
	import array = require("dojo/_base/array");
		:
		:
	var retval = { ... };
	export = retval;

compiles to:

	define(["require", "exports", "dojo/_base/array"], function(require, exports, __array__) {
		var array = __array__;
			:
			:
		var retval = { ... };
		return retval;
	});

The "export = ..." statement is necessary because TypeScript defaults
to CommonJS-style AMD modules, which means attaching exported functions
to the "exports" object but does not return it. This will cause errors
when running the actual JavaScript with Dojo. Using "export = ..." 
causes TypeScript to load the proper object type for the module as well
as generate the necessary "return" statement to return the module object.

To use this TypeScript module from another TypeScript module, simply
"import" it just like any other Dojo/Dijit module!

For example:

	foo.ts (your new module in TypeScript):
	
		var retval = { ... };
		export = retval;
		
	bar.ts (which uses foo.ts):
	
		import foo = require("foo");
			:
			:

Visual Studio will detect that you have a TypeScript file called
"foo.ts" and, upon seeing the statement "import xyz = require("foo");",
automatically loads the type definitions for the module defined in
foo.ts!  The two TypeScript files will compile into the following
JavaScript files which, of course, work perfectly fine as well:

	foo.js:
	
		define(["require", "exports"], function(require, exports) {
			var retval = { ... };
			return retval;
		});
		
	bar.js:

		define(["require", "exports", "foo"], function(require, exports, __foo__) {
			var foo = __foo__;
				:
				:
		});


VI. Using dojo/NodeList
-----------------------

dojo/NodeList can use a number of mixin's (e.g. dojo/NodeList-dom,
dojo/NodeList-html).  After requiring these mixin's, there is no need to
explicitly use the returned type constructor, as the original
dojo/NodeList will already contain these features.  Therefore, all the
methods defined in mixin's have been added to the dojo/NodeList
definition itself.

As in the following, you can continue to use NodeList after mixing in
other NodeList features:

	/// <reference path="dojo.d.ts"/>
	import NodeList = require("dojo/NodeList");
	import NodeListDom = require("dojo/NodeList-dom");
		:
	<< you can use methods defined in dojo/NodeList-dom on NodeList >>
		:

It compiles to:

	define(["require", "exports", "dojo/NodeList", "dojo/NodeList-dom"], function(require, exports, __NodeList__, __NodeListDom__) {
		var NodeList = __NodeList__
		var NodeListDom = __NodeListDom__
			:
			:
	});

Unfortunately you cannot import a module without creating a variable
to hold it.


VII. Other TypeScript definition files
--------------------------------------

The file "dojo.d.ts" contains definitions for most of Dojo, but some
subsystems are split into separate definition files in order to
improve compilation speed and checking speed in Visual Studio.

Similarly, "dijit.d.ts" only contains base widget definitions. Other
widgets are defined in separate, grouped definition files.

When these other definitions are needed, you must put in additional
"/// <reference path="..." />" lines to pull in the relevant
definition files.

The complete list of definition files is as follows:

	dojo.types.d.ts      - Common type definitions for Dojo
	dojo.d.ts            - Dojo Core
	dojo.store.d.ts      - dojo/store modules
	dojo.data.d.ts       - Legacy dojo/data modules
	
	dijit.d.ts           - Basic widget definitions
	dijit.menu.d.ts      - dijit/Menu modules
	dijit.form.d.ts      - dijit/form base definitions
	dijit.form.button.d.ts   - dijit/form/Button
	dijit.form.textbox.d.ts  - dijit/form/TextBox
	dijit.form.select.d.ts   - dijit/form/Select


VIII. Importing plugin's
------------------------

For plugin modules, use the following undocumented feature to pull
in the dependent module at the end of the "require" list without
creating a variable:

	/// <amd-dependency path="plugin1" />
	/// <amd-dependency path="plugin2" />
	/// <amd-dependency path="plugin3" />

These must be among the first lines of the program file.


IX. dojo/text!...
-----------------

For dynamic plugin modules like "dojo/text" which accepts a resource
path and returns the resource at that path, Dojo creates a module
with an dynamically-generated name that you cannot access directly.
You won't be able to do:

	/// <amd-dependency path="dojo/text!foo/bar/baz.txt" />

	var baz = require<string>("dojo/text!foo/bar/baz.txt");      // Module not found
	
For generic dynamic plugin modules, you have to fudge it like this:

	declare module "dojo/blah!foo/bar/baz"
	{
		var retval: string;
		export = retval;
	}

	import baz = require("dojo/blah!foo/bar/baz");
	
It compiles to:

	define(["require", "exports", "dojo/blah!foo/bar/baz"], function(require, exports, __baz__) {
		var baz = __baz__;
			:
			:
	});

However, for the extremely important case of "dojo/text", there
is a short-cut which is to use "dojo/cache":

	/// <amd-dependency path="dojo/text!foo/bar/baz.txt" />
	
	import cache = require("dojo/cache");
	var baz = cache<string>("foo/bar/baz.txt");

The dynamic plugin module "dojo/text" uses "dojo/cache" to cache
text content retrieved, with the URL path as key.


X. Namespaces and types
-----------------------

Interfaces are created for most Dojo Core modules and classes for
almost all Dijit classes.  These interfaces and classes can be used
directly in TypeScript code separate from the Dojo/Dijit modules
they reside in.

Dojo namespaces and interfaces/types are proper-cased, for example:

	dojo/html        ==> Dojo.Html
	dojo/ready       ==> Dojo.Ready
	dojo/dom-class   ==> Dojo.DomClass
	
Modules under "dojo/_base" are mapped under the Dojo namespace
without the "_base" level, for example:

	dojo/_base/array ==> Dojo.Array
	dojo/_base/lang  ==> Dojo.Lang
	
Some very common Dojo classes are put under the "dojo" namespace
(notice the lower-case "d") so that they can be used directly in
TypeScript code which will compile stright to JavaScript code that
works straight out with Dojo:

	dojo.Evented
	dojo.Stateful
	dojo.Deferred
	dojo.Promise
	dojo.Animation
	
An example of using "dojo/_base/array" without using TypeScript's
"import" syntax is:

	require(["dojo/_base/array"], function(array: Dojo.Array) { ... });

Widgets defined under dijit, however, use the "dijit" namespace
(note the lower-case "d") instead of "Dijit" because some programmers
use them as base classes to declare new widgets -- a practice better
avoided.

TypeScript interface definitions for Dijit (i.e. not regular dijit
classes) continue to use the "Dijit" namespace.
