/************************************************************************/
/* Define button widget                                                 */
/************************************************************************/

/// <reference path="dijit.d.ts"/>
/// <reference path="dijit.form.d.ts"/>

declare module dijit
{
	module form
	{
		interface _ButtonMixin extends Dijit._Mixin
		{
			//label: string;
			//type: string;

			get(name: "label"): string;
			get(name: "type"): string;
			get(name: string): any;

			set(name: "label", value: string): void;
			set(name: "type", value: string): void;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;

			watch(prop: "label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "type", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
		}

		class Button extends _FormWidget implements _ButtonMixin
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

			// dijit/form/_ButtonMixin
			get(name: "label"): string;
			set(name: "label", value: string): void;
			watch(prop: "label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			// Events
			on(type: "Blur", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Change", listener: (newValue: any) => void ): Dojo.RemovableHandle;
			on(type: "Click", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "Close", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "DblClick", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "Focus", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Hide", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Input", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: "KeyDown", listener: Dojo.EventListener<KeyboardEvent> ): Dojo.RemovableHandle;
			on(type: "KeyPress", listener: Dojo.EventListener<KeyboardEvent> ): Dojo.RemovableHandle;
			on(type: "KeyUp", listener: Dojo.EventListener<KeyboardEvent> ): Dojo.RemovableHandle;
			on(type: "MouseDown", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseEnter", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseLeave", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseMove", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseOut", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseOver", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "MouseUp", listener: Dojo.EventListener<MouseEvent> ): Dojo.RemovableHandle;
			on(type: "Show", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;
		}
	}
}

// Module definitions

declare module "dijit/form/Button"
{
	var Button: typeof dijit.form.Button;
	export = Button;
}