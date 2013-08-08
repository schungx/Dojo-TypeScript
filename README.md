Using Dojo (AMD-style) with TypeScript
======================================

This project is an attempt to use the Dojo Toolkit (version 1.7 or higher in the new AMD style) with Microsoft's TypeScript (version 0.9.1 and up with generics support).

Older-style Dojo is not supported, as there are already projects converting the old Dojo API files to TypeScript module definitions.  Deprecated interfaces and features in Dojo are not support.  Only AMD-style Dojo is supported.  If you're developing using TypeScript, chances are that it is a brand-new project and you really should be using the new Dojo style.

I try to make using Dojo with TypeScript as close to native TypeScript programming style as possible.  But the compiled JavaScript files *MUST* be usable directly, not needing any post-processing.  I have been able to achieve this to a certain extent.


Note
----

Most of Dojo Core is complete, but much of Dijit is not.  I've only done a couple of modules (e.g. Menus).  Type definition files for other Dijit modules can be built rather quickly using the existing modules as templates.  When I have time, I'll progressively add more module type definitions

Dojox modules are *not* done at the moment.

And of course, contributions are *heartily* welcomed!  :-)
