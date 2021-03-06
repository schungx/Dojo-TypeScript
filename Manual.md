Using The Dojo Toolkit (AMD-style) with TypeScript
==================================================

Preamble
--------

Using TypeScript with the Dojo Toolkit is easy with a few tricks to
let the system do what you want.

One of the tricky issues is the fact that all TypeScript files are
compiled into AMD modules (when the `--module amd` option is set,
which it should be in order to use TypeScript with Dojo). If you stay
100% in TypeScript, how do you **bootstrap** the root module?  Turns out
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

I. Prepare Dojo baseUrl/packages and bootstrap
-------------------------------------------------

*LOADING DOJO FROM A CDN*

If you load Dojo from a CDN, use the following script tag in your main
HTML file:

	<script type="text/javascript"
		data-dojo-config="async:true, baseUrl:location.href.substring(0,location.href.lastIndexOf('/')+1)+'path/to/scripts/xyz.js'"
		src="http://ajax.googleapis.com/ajax/libs/dojo/1.9.0/dojo/dojo.js">
	</script>

The `baseUrl` setting in DojoConfig creates a path to a script file in
your main scripts directory relative to the HTML file's location.  It
overrides the default path for loading AMD modules (other than modules
under dojo, dijit and dojox) by the Dojo AMD loader.

*LOADING DOJO LOCALLY*

The above works fine if you have a custom build of Dojo (`dojo.js`) that
contains all the required functionalities, or if you only use Dojo Base.

The above doesn't work if you load Dojo (or a custom build) locally
with asynchronous script loading. For example, if you need to
load functionalities outside of `Dojo Base` asynchronously, Dojo will
complain that script files cannot be found. This can be expected because,
as you override `baseUrl`, you also override the path where other Dojo
modules can be found.

In order to load Dojo from a local source asynchronously, you should use the
`packages` setting (`modulePaths` in previous Dojo versions) in `dojoConfig`
to re-map the locations for `dojo`, `dijit` and `dojox`:

	<script type="text/javascript">
		dojoConfig = {
			async: true,
			baseUrl: location.href.substring(0, location.href.lastIndexOf('/') + 1) + 'path/to/scripts/xyz.js',
			packages: [
				{ name: 'dojo', location: '/path/to/dojo' },
				{ name: 'dijit', location: '/path/to/dijit' },
				{ name: 'dojox', location: '/path/to/dojox' }
			]
		};
	</script>
	<script type="text/javascript" src="/path/to/dojo/dojo.js"></script>

This is the exact *opposite* of what you would normally do. The typical way to
load custom modules is to map it to a custom prefix (one that is other than
`dojo`, `dijit` and `dojox`) and map that prefix to a path that may or may not
be the same as the physical directory structure.

However, TypeScript does not support looking for modules via prefix mapped to
a path, so you must abandon that practice and use path-relative modules for all.
Because of this, it is far easier to re-map the locations for `dojo`, `dijit`
and `dojox` instead.

*PROBLEM WITH MODULE PATHS*

If you do have a need to organize modules according to prefix, but the
namespace does not match the physical directory structure, understand
that you'll have to duplicate a *lot* of code files. Essentially,
everywhere you import a module, you have to make sure that a subdirectory
exists, with the same name as the prefix of the module, at the same level
of the TypeScript file that uses that module, and that inside this
subdirectory is a copy of the module's TypeScript file. Otherwise,
TypeScript will complain that it doesn't find your module (since it doesn't
understand that you have "mapped" a different path to its prefix and it
interprets a prefix literally as a directory under the home).

A simpler way is to generate a `.d.ts` type definition file for your
module, and then use the `/// <reference path="..." />` syntax to load it.
You will then be able to use that module in TypeScript and TypeScript will
not attempt to locate that module file (which it won't find). This method,
however, necessitates the regeneration of a lot of type definition files
(and remembering to do it!) every time the public API of your module
changes.

*BOOTSTRAPING*

JavaScript files compiled from TypeScript source modules in your project
look exactly like a regular Dojo AMD-style module and are loaded
automatically when `require`-d.

If you stay completely within TypeScript and Visual Studio, however, you'll
find that every TypeScript file is compiled into an AMD module (see
*TypeScript setup* below) and there is no way to automatically load the
top-most one (your root module)!

The way to bootstrap the entire tree of modules is either: (1) write a
simple, vanilla JavaScript script that contains the `require` statement,
or (2) put that `require` statement in a script tag inside your HTML
file. Option (1) is suitable where many pages must load the same scripts.
Option (2) is simpler and suitable for one-page web apps because you
avoid creating yet another JavaScript script file.

Option (1):

* `bootstrap.js`:  `require(["main"]);`
* `main.html`:     `<script type="text/javascript" src="bootstrap.js"></script>`

Option (2):

* `main.html`:     `<script type="text/javascript">require(["main"]);</script>`

II. Dojo type definitions and referencing dojo.d.ts
---------------------------------------------------

Common types used in Dojo are defined in the file `dojo.types.d.ts`.
You don't normally need to reference this file, since all other Dojo
definition files reference it.  You need it only if you are writing
your own module files to compile into Dojo-style modules.

Basic Dojo modules are defined in the file `dojo.d.ts`.  It contains most
of the core functionalities.

To use Dojo, include the following reference in the first lines of your
TypeScript file:

	/// <reference path="dojo.d.ts" />

To use Dijits, include the following reference in the first lines of your
TypeScript file:

	/// <reference path="dijit.d.ts" />

To use Dijits together with Dojo:

	/// <reference path="dojo.d.ts" />
	/// <reference path="dijit.d.ts" />

Some modules are split into their own separate definition files.  For example,
to use dojo/store, you must add another reference:

	/// <reference path="dojo.d.ts" />
	/// <reference path="dojo.store.d.ts" />

III. TypeScript setup
---------------------

You MUST be using TypeScript version 1.6 or higher.

When using the command line compiler, use the `--module amd` flag
since Dojo works with AMD-style modules.

Your TypeScript environment must be setup to compile using AMD-style
modules.  In Visual Studio, you can set this within the project settings.

IV. Using Dojo modules
----------------------

To use a Dojo module, just `import` it:

	/// <reference path="dojo.d.ts" />
	import * as array from "dojo/_base/array";
	array.forEach(...);

compiles into:

	define(["require", "exports", "dojo/_base/array"], function(require, exports, array) {
		array.forEach(...);
	});

Directly-callable Dojo modules are supported similarly.  For example:

	/// <reference path="dojo.d.ts" />
	import * as ready from "dojo/ready";
	ready(() => { ... });

compiles into:

	define(["require", "exports", "dojo/ready"], function(require, exports, ready) {
		ready(function() { ... });
	});

Selectively importing certain methods are also supported:

	/// <reference path="dojo.d.ts" />
	import { forEach } from "dojo/_base/array";
	forEach(...);

compiles into:

	define(["require", "exports", "dojo/_base/array"], function(require, exports, array_1) {
		array_1.forEach(...);
	});

Class-type Dojo modules are also supported.  For example:

	/// <reference path="dojo.store.d.ts" />
	import * as Memory from "dojo/store/Memory";
	var store = new Memory({ data: ... });

compiles into:

	define(["require", "exports", "dojo/store/Memory"], function(require, exports, Memory) {
		var store = new Memory({ data: ... });
	});

V. Defining new modules in TypeScript
-------------------------------------

You can define modules to be used with Dojo in TypeScript.  For example,
the following:

	/// <reference path="dojo.d.ts" />
	import * as array from "dojo/_base/array";
		:
		:
	var retval = { ... };
	export = retval;

compiles to:

	define(["require", "exports", "dojo/_base/array"], function(require, exports, array) {
			:
			:
		var retval = { ... };
		return retval;
	});

The `export = ...` statement is necessary because TypeScript defaults
to CommonJS-style AMD modules, which means attaching exported functions
to the `exports` object but does not return it. This will cause errors
when running the actual JavaScript with Dojo. Using `export = ...`
causes TypeScript to load the proper object type for the module as well
as generate the necessary `return` statement to return the module object.

To use this TypeScript module from another TypeScript module, simply
`import` it just like any other Dojo/Dijit module!

For example:

`foo.ts` (your new module in TypeScript):

	var retval = { ... };
	export = retval;

`bar.ts` (which uses foo.ts):

	import * as foo from "foo";
		:
		:

or

	import { func1, func2 ... } from "foo";
		:
		:

Visual Studio will detect that you have a TypeScript file called
`foo.ts` and, upon seeing the statement `import xyz = require("foo");`,
automatically loads the type definitions for the module defined in
foo.ts!  The two TypeScript files will compile into the following
JavaScript files which, of course, work perfectly fine as well:

`foo.js`:

	define(["require", "exports"], function(require, exports) {
		var retval = { ... };
		return retval;
	});

`bar.js`:

	define(["require", "exports", "foo"], function(require, exports, foo) {
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

	/// <reference path="dojo.d.ts" />
	import * as NodeList from "dojo/NodeList";
	import * as NodeListDom from "dojo/NodeList-dom";
		:
	<< you can use methods defined in dojo/NodeList-dom on NodeList >>
		:

It compiles to:

	define(["require", "exports", "dojo/NodeList", "dojo/NodeList-dom"], function(require, exports, NodeList, NodeListDom) {
			:
			:
	});

Unfortunately you cannot import a module without creating a variable
to hold it.

VII. Other TypeScript definition files
--------------------------------------

The file `dojo.d.ts` contains definitions for most of Dojo, but some
subsystems are split into separate definition files in order to
improve compilation speed and checking speed in Visual Studio.

Similarly, `dijit.d.ts` only contains base widget definitions. Other
widgets are defined in separate, grouped definition files.

When these other definitions are needed, you must put in additional
`/// <reference path="..." />` lines to pull in the relevant
definition files.

The complete list of definition files is as follows:

* `dojo.types.d.ts`      - Common type definitions for Dojo
* `dojo.d.ts`            - Dojo Core
* `dojo.store.d.ts`      - `dojo/store` modules
* `dojo.data.d.ts`       - Legacy `dojo/data` modules

* `dijit.d.ts`           - Basic widget definitions
* `dijit.menu.d.ts`      - `dijit/Menu` modules
* `dijit.form.d.ts`      - `dijit/form` base definitions
* `dijit.form.button.d.ts`   - `dijit/form/Button`
* `dijit.form.textbox.d.ts`  - `dijit/form/TextBox`
* `dijit.form.select.d.ts`   - `dijit/form/Select`

VIII. Importing plugin's
------------------------

For plugin modules, use the following undocumented feature to pull
in the dependent module at the end of the `require` list without
creating a variable:

	/// <amd-dependency path="plugin1" />
	/// <amd-dependency path="plugin2" />
	/// <amd-dependency path="plugin3" />

These must be among the first lines of the program file.

IX. dojo/text!...
-----------------

For dynamic plugin modules like `dojo/text` which accepts a resource
path and returns the resource at that path, Dojo creates a module
with an dynamically-generated name that you cannot access directly.
You won't be able to do:

	/// <amd-dependency path="dojo/text!foo/bar/baz.txt" />

	var baz = require<string>("dojo/text!foo/bar/baz.txt");      // Module not found

You can fudge it like this:

	/// <amd-dependency path="dojo/text!foo/bar/baz.txt" name="baz" />

	declare var baz: string;

It compiles to:

	define(["require", "exports", "dojo/blah!foo/bar/baz"], function(require, exports, baz) {
			:
			:
	});

X. Namespaces and types
-----------------------

Interfaces are created for most Dojo Core modules and classes for
almost all Dijit classes.  These interfaces and classes can be used
directly in TypeScript code separate from the Dojo/Dijit modules
they reside in.

Dojo namespaces and interfaces/types are proper-cased, for example:

* `dojo/html`        ==> `Dojo.Html`
* `dojo/ready`       ==> `Dojo.Ready`
* `dojo/dom-class`   ==> `Dojo.DomClass`

Modules under `dojo/_base` are mapped under the Dojo namespace
without the `_base` level, for example:

* `dojo/_base/array` ==> `Dojo.Array`
* `dojo/_base/lang`  ==> `Dojo.Lang`

Some very common Dojo classes are put under the `dojo` namespace
(notice the lower-case `d`) so that they can be used directly in
TypeScript code which will compile stright to JavaScript code that
works straight out with Dojo:

	dojo.Evented
	dojo.Stateful
	dojo.Deferred
	dojo.Promise
	dojo.Animation

An example of using `dojo/_base/array` without using TypeScript's
`import` syntax is:

	require(["dojo/_base/array"], function(array: Dojo.Array) { ... });

Widgets defined under dijit, however, use the `dijit` namespace
(note the lower-case `d`) instead of `Dijit` because some programmers
use them as base classes to declare new widgets -- a practice better
avoided.

TypeScript interface definitions for Dijit (i.e. not regular dijit
classes) continue to use the `Dijit` namespace.

XI. Using Dojo Synchronously
----------------------------

The various TypeScript types described above can turn out to be
very useful, especially when using Dojo synchronously together with
other third-party libraries without AMD.

For example, when using AngularJS, it is sometimes clumbersome to use
the `$location` service to parse query parameters. Why not use
`dojo/io-query` from Dojo Base instead?

`main.html` (Include Dojo Base):

	<script type="text/javascript" src="angular.js"></script>
	<script type="text/javascript" src="dojo.js"></script>

`script.ts`:

	/// <reference path="dojo.d.ts" />
	const query = require("dojo/io-query");
	const params = query.queryToObject(document.location.search.substr(1));

	angular.module(...)...

In the above example, Dojo Base is included synchronously, which makes
all its modules immediately available. When accessed via a `require` call,
the reqested module is returned. The returned object (in this case `query`)
is automatically casted to the correct interface.