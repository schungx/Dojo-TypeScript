Using Dojo 1.7+ with TypeScript 0.9+
====================================

This project is an attempt to use the Dojo Toolkit (version 1.7 or higher in the new AMD style) with Microsoft's TypeScript (version 0.9 and up with generics support).

Older-style Dojo is not supported, as there are already projects converting the old Dojo API files to TypeScript module definitions.  Deprecated interfaces and features in Dojo are not support.  Only AMD-style Dojo is supported.  If you're developing using TypeScript, chances are that it is a brand-new project and you really should be using the new Dojo style.

I try to make using Dojo with TypeScript as close to native TypeScript programming style as possible.  But the compiled JavaScript files *MUST* be usable directly, not needing any post-processing.  I have been able to achieve this to a certain extent (much more success with version 0.8 than the latest version 0.9 unfortunately), but there are a few places where integration is still quite clumbersome.  Hopefully future versions of TypeScript will be able to handle these issues.

Starting from version 0.9 of TypeScript (with generics support -- a _very_ good thing), modules are no longer created as a type but strictly a namespace.  Which means that I can no longer make all Dojo modules TypeScript modules.  In version 0.8, Dojo modules that are directly callable (e.g. dojo/on) or newable (e.g. all widgets) can be made into TypeScript modules.  Starting from version 0.9, this is no longer possible, and must rely on an undocumented feature of TypeScript plus some more clumbersome syntax.
