/************************************************************************/
/* Define textbox widget                                                */
/************************************************************************/

/// <reference path="dijit.d.ts"/>
/// <reference path="dijit.form.d.ts"/>

declare module dijit
{
  module form
	{
		interface _TextBoxMixin extends Dijit._Mixin
		{
			//displayedValue: string;
			//lowercase: boolean;
			//maxLength: number;
			//placeHolder: string;
			//propercase: boolean;
			//selectOnClick: boolean;
			//trim: boolean;
			//uppercase: boolean;

			get(name: "displayedValue"): string;
			get(name: "lowercase"): boolean;
			get(name: "maxLength"): number;
			get(name: "placeHolder"): string;
			get(name: "propercase"): boolean;
			get(name: "selectOnClick"): boolean;
			get(name: "trim"): boolean;
			get(name: "uppercase"): boolean;
			get(name: string): any;

			set(name: "displayedValue", value: string): void;
			set(name: "lowercase", value: boolean): void;
			set(name: "maxLength", value: number): void;
			set(name: "placeHolder", value: string): void;
			set(name: "propercase", value: boolean): void;
			set(name: "selectOnClick", value: boolean): void;
			set(name: "trim", value: boolean): void;
			set(name: "uppercase", value: boolean): void;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;

			watch(prop: "displayedValue", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "lowercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "maxLength", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "placeHolder", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "propercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "lowercaseselectOnClick", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "trim", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "uppercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;


			filter(val: string): any;
			format(value: string, constraints: Object): string;
			parse(value: string, constraints: Object): string;
			postCreate(): void;
			reset(): void;
			selectInputText(element: HTMLElement, start?: number, stop?: number): void;

			onInput(event: KeyboardEvent): void;
		}

		class TextBox extends _FormValueWidget implements _TextBoxMixin
		{
			// dijit/form/_FormValueWidget
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
			get(name: "readOnly"): boolean;

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
			set(name: "readOnly", value: boolean): void;

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
			watch(prop: "readOnly", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;

			// dijit/form/_TextBoxMixin
			get(name: "displayedValue"): string;
			get(name: "lowercase"): boolean;
			get(name: "maxLength"): number;
			get(name: "placeHolder"): string;
			get(name: "propercase"): boolean;
			get(name: "selectOnClick"): boolean;
			get(name: "trim"): boolean;
			get(name: "uppercase"): boolean;

			set(name: "displayedValue", value: string): void;
			set(name: "lowercase", value: boolean): void;
			set(name: "maxLength", value: number): void;
			set(name: "placeHolder", value: string): void;
			set(name: "propercase", value: boolean): void;
			set(name: "selectOnClick", value: boolean): void;
			set(name: "trim", value: boolean): void;
			set(name: "uppercase", value: boolean): void;

			watch(prop: "displayedValue", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "lowercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "maxLength", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
			watch(prop: "placeHolder", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "propercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "lowercaseselectOnClick", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "trim", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "uppercase", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;

			filter(val: string): any;
			format(value: string, constraints: Object): string;
			parse(value: string, constraints: Object): string;
			postCreate(): void;
			reset(): void;
			selectInputText(element: HTMLElement, start?: number, stop?: number): void;

			onInput(event: KeyboardEvent): void;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			// Events
			on(type: "Blur", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Change", listener: (newValue: string) => void): Dojo.RemovableHandle;
			on(type: "Click", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "Close", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "DblClick", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "Focus", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Hide", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Input", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: "KeyDown", listener: (ev: KeyboardEvent) => void): Dojo.RemovableHandle;
			on(type: "KeyPress", listener: (ev: KeyboardEvent) => void): Dojo.RemovableHandle;
			on(type: "KeyUp", listener: (ev: KeyboardEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseDown", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseEnter", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseLeave", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseMove", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseOut", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseOver", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "MouseUp", listener: (ev: MouseEvent) => void): Dojo.RemovableHandle;
			on(type: "Show", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;
		}
	}
}


// Module definitions

declare module "dijit/form/TextBox" 
{
	class TextBox extends dijit.form.TextBox {}
	export = TextBox;
}
