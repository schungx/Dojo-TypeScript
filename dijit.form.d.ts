/************************************************************************/
/* Define form widgets                                                  */
/************************************************************************/

/// <reference path="dijit.d.ts"/>

declare module dijit
{
  module form
	{
		interface _FormMixin extends Dijit._Mixin
		{
			//state: string;

			get(name: "state"): string;
			get(name: string): any;

			set(name: "state", value: string): void;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;

			watch(prop: "state", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			connectChildren(inStartup: boolean): void;
			reset(): void;
			validate(): void;
		}

		interface _FormWidgetMixin extends Dijit._Mixin
		{
			//alt: string;
			//"aria-label": string

			get(name: "alt"): string;
			get(name: "aria-label"): string;
			get(name: "disabled"): boolean;
			get(name: "intermediateChanges"): boolean;
			get(name: "name"): string;
			get(name: "scrollOnFocus"): boolean;
			get(name: "tabIndex"): number;
			get(name: "type"): string;
			get(name: "value"): string;
			get(name: string): any;

			set(name: "alt", value: string): void;
			set(name: "aria-label", value: string): void;
			set(name: "disabled", value: boolean): void;
			set(name: "intermediateChanges", value: boolean): void;
			set(name: "name", value: string): void;
			set(name: "scrollOnFocus", value: string): boolean;
			set(name: "tabIndex", value: number): void;
			set(name: "type", value: string): void;
			set(name: "value", value: string): void;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;

			watch(prop: "alt", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "aria-label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "disabled", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "intermediateChanges", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "name", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "scrollOnFocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "tabIndex", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "type", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "value", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;


			compare(val1: any, val2: any): number;
			create(): void;
			destroy(): void;
			focus(): void;
		}

		interface _FormValueMixin extends _FormWidgetMixin
		{
			//readOnly: boolean;

			get(name: "readOnly"): boolean;
			set(name: "readOnly", value: boolean): void;
			watch(prop: "readOnly", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;

			postCreate(): void;
			reset(): void;
			undo(): void;

			// dijit/form/_FormWidgetMixin
			get(name: "alt"): string;
			get(name: "aria-label"): string;
			get(name: "disabled"): boolean;
			get(name: "intermediateChanges"): boolean;
			get(name: "name"): string;
			get(name: "scrollOnFocus"): boolean;
			get(name: "tabIndex"): number;
			get(name: "type"): string;
			get(name: "value"): string;
			get(name: string): any;

			set(name: "alt", value: string): void;
			set(name: "aria-label", value: string): void;
			set(name: "disabled", value: boolean): void;
			set(name: "intermediateChanges", value: boolean): void;
			set(name: "name", value: string): void;
			set(name: "scrollOnFocus", value: string): boolean;
			set(name: "tabIndex", value: number): void;
			set(name: "type", value: string): void;
			set(name: "value", value: string): void;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;

			watch(prop: "alt", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "aria-label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "disabled", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "intermediateChanges", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "name", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "scrollOnFocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "tabIndex", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "type", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "value", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
		}

		class _FormWidget extends _Widget implements _TemplatedMixin, _CssStateMixin, _FormWidgetMixin
		{
			// dijit/_Widget
			get(name: "baseClass"): string;
			get(name: "class"): string;
			get(name: "containerNode"): HTMLElement;
			get(name: "dir"): string;
			get(name: "domNode"): HTMLElement;
			get(name: "focused"): boolean;
			get(name: "id"): string;
			get(name: "lang"): string;
			get(name: "ownerDocument"): HTMLDocument;
			get(name: "postMixInProperties"): string;
			get(name: "srcNodeRef"): HTMLElement;
			get(name: "style"): Dojo.StylesMap;
			get(name: "title"): string;
			get(name: "tooltip"): string;

			set(name: "baseClass", value: string): void;
			set(name: "class", value: string): void;
			set(name: "containerNode", value: HTMLElement): void;
			set(name: "dir", value: string): void;
			set(name: "domNode", value: HTMLElement): void;
			set(name: "focused", value: boolean): void;
			set(name: "id", value: string): void;
			set(name: "lang", value: string): void;
			set(name: "ownerDocument", value: HTMLDocument): void;
			set(name: "postMixInProperties", value: string): void;
			set(name: "srcNodeRef", value: HTMLElement): void;
			set(name: "style", value: Dojo.StylesMap): void;
			set(name: "title", value: string): void;
			set(name: "tooltip", value: string): void;

			watch(prop: "baseClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "class", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "containerNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "dir", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "domNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "focused", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "id", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "lang", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "ownerDocument", callback: Dojo.WatchCallback<HTMLDocument>): Dojo.WatchHandle;
			watch(prop: "postMixInProperties", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "srcNodeRef", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "style", callback: Dojo.WatchCallback<Dojo.StylesMap>): Dojo.WatchHandle;
			watch(prop: "title", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "tooltip", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

			// dijit/_TemplatedMixin
			get(name: "attachScope"): Object;
			get(name: "searchContainerNode"): boolean;
			get(name: "templatePath"): string;
			get(name: "templateString"): string;

			set(name: "attachScope", value: Object): void;
			set(name: "searchContainerNode", value: boolean): void;
			set(name: "templatePath", value: string): void;
			set(name: "templateString", value: string): void;

			watch(prop: "attachScope", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
			watch(prop: "searchContainerNode", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "templatePath", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "templateString", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

			getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;

			// dijit/_CssStateMixin
			get(name: "active"): boolean;
			get(name: "cssStateNodes"): { [attachPoint: string]: string; };
			get(name: "hovering"): boolean;

			set(name: "active", value: boolean): void;
			set(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
			set(name: "hovering", value: boolean): void;

			watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<{ [attachPoint: string]: string; }>): Dojo.WatchHandle;
			watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;

			// dijit/form/_FormWidgetMixin
			get(name: "alt"): string;
			get(name: "aria-label"): string;
			get(name: "disabled"): boolean;
			get(name: "intermediateChanges"): boolean;
			get(name: "name"): string;
			get(name: "scrollOnFocus"): boolean;
			get(name: "tabIndex"): number;
			get(name: "type"): string;
			get(name: "value"): string;

			set(name: "alt", value: string): void;
			set(name: "aria-label", value: string): void;
			set(name: "disabled", value: boolean): void;
			set(name: "intermediateChanges", value: boolean): void;
			set(name: "name", value: string): void;
			set(name: "scrollOnFocus", value: string): boolean;
			set(name: "tabIndex", value: number): void;
			set(name: "type", value: string): void;
			set(name: "value", value: string): void;

			watch(prop: "alt", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "aria-label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "disabled", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "intermediateChanges", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "name", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "scrollOnFocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "tabIndex", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "type", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "value", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

			compare(val1: any, val2: any): number;
			create(): void;
			destroy(): void;
			focus(): void;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
		}

		class _FormValueWidget extends _FormWidget implements _FormValueMixin
		{
			// dijit/form/_FormWidget
			get(name: "baseClass"): string;
			get(name: "class"): string;
			get(name: "containerNode"): HTMLElement;
			get(name: "dir"): string;
			get(name: "domNode"): HTMLElement;
			get(name: "focused"): boolean;
			get(name: "id"): string;
			get(name: "lang"): string;
			get(name: "ownerDocument"): HTMLDocument;
			get(name: "postMixInProperties"): string;
			get(name: "srcNodeRef"): HTMLElement;
			get(name: "style"): Dojo.StylesMap;
			get(name: "title"): string;
			get(name: "tooltip"): string;
			get(name: "attachScope"): Object;
			get(name: "searchContainerNode"): boolean;
			get(name: "templatePath"): string;
			get(name: "templateString"): string;
			get(name: "active"): boolean;
			get(name: "cssStateNodes"): { [attachPoint: string]: string; };
			get(name: "hovering"): boolean;
			get(name: "alt"): string;
			get(name: "aria-label"): string;
			get(name: "disabled"): boolean;
			get(name: "intermediateChanges"): boolean;
			get(name: "name"): string;
			get(name: "scrollOnFocus"): boolean;
			get(name: "tabIndex"): number;
			get(name: "type"): string;
			get(name: "value"): string;

			set(name: "baseClass", value: string): void;
			set(name: "class", value: string): void;
			set(name: "containerNode", value: HTMLElement): void;
			set(name: "dir", value: string): void;
			set(name: "domNode", value: HTMLElement): void;
			set(name: "focused", value: boolean): void;
			set(name: "id", value: string): void;
			set(name: "lang", value: string): void;
			set(name: "ownerDocument", value: HTMLDocument): void;
			set(name: "postMixInProperties", value: string): void;
			set(name: "srcNodeRef", value: HTMLElement): void;
			set(name: "style", value: Dojo.StylesMap): void;
			set(name: "title", value: string): void;
			set(name: "tooltip", value: string): void;
			set(name: "attachScope", value: Object): void;
			set(name: "searchContainerNode", value: boolean): void;
			set(name: "templatePath", value: string): void;
			set(name: "templateString", value: string): void;
			set(name: "active", value: boolean): void;
			set(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
			set(name: "hovering", value: boolean): void;
			set(name: "alt", value: string): void;
			set(name: "aria-label", value: string): void;
			set(name: "disabled", value: boolean): void;
			set(name: "intermediateChanges", value: boolean): void;
			set(name: "name", value: string): void;
			set(name: "scrollOnFocus", value: string): boolean;
			set(name: "tabIndex", value: number): void;
			set(name: "type", value: string): void;
			set(name: "value", value: string): void;

			watch(prop: "baseClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "class", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "containerNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "dir", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "domNode", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "focused", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "id", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "lang", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "ownerDocument", callback: Dojo.WatchCallback<HTMLDocument>): Dojo.WatchHandle;
			watch(prop: "postMixInProperties", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "srcNodeRef", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
			watch(prop: "style", callback: Dojo.WatchCallback<Dojo.StylesMap>): Dojo.WatchHandle;
			watch(prop: "title", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "tooltip", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "attachScope", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
			watch(prop: "searchContainerNode", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "templatePath", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "templateString", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<{ [attachPoint: string]: string; }>): Dojo.WatchHandle;
			watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "alt", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "aria-label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "disabled", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "intermediateChanges", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "name", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "scrollOnFocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "tabIndex", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "type", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "value", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

			// dijit/form/_FormValueMixin
			get(name: "readOnly"): boolean;
			set(name: "readOnly", value: boolean): void;
			watch(prop: "readOnly", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;

			postCreate(): void;
			reset(): void;
			undo(): void;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
		}
	}
}


// Module definitions

declare module "dijit/form/_FormMixin" 
{
	var _FormMixin: dijit.form._FormMixin;
	export = _FormMixin;
}

declare module "dijit/form/_FormWidgetMixin"
{
	var _FormWidgetMixin: dijit.form._FormWidgetMixin;
	export = _FormWidgetMixin;
}

declare module "dijit/form/_FormWidget"
{
	class _FormWidget extends dijit.form._FormWidget {}
	export = _FormWidget;
}

declare module "dijit/form/_FormValueMixin" 
{
	var _FormValueMixin: dijit.form._FormValueMixin;
	export = _FormValueMixin;
}

declare module "dijit/form/_FormValueWidget" 
{
	class _FormValueWidget extends dijit.form._FormValueWidget { }
	export = _FormValueWidget;
}
