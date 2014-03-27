/************************************************************************/
/* Define button widget                                                 */
/************************************************************************/

/// <reference path="dojo.d.ts"/>
/// <reference path="dijit.d.ts"/>
/// <reference path="dijit.form.d.ts"/>
/// <reference path="dojo.store.d.ts"/>

declare module dijit {
	module form {
		interface _SelectOption {
			label: string;
			value?: string;
			disabled?: boolean;
			selected?: boolean;
		}

		class _FormSelectWidget extends _FormValueWidget {
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

			// dijit/form/_FormSelectMixin
			get(name: "labelAttr"): string;
			get(name: "loadChildrenOnOpen"): boolean;
			get(name: "multiple"): boolean;
			get(name: "onFetch"): Function;
			get<T>(name: "onLoadDeferred"): dojo.Deferred<T>;
			get(name: "options"): _SelectOption[];
			get(name: "query"): any;
			get(name: "queryOptions"): Dojo.Store.QueryOptions;
			get(name: "sortByLabel"): boolean;
			get<K>(name: "store"): Dojo.Store._Store<Object, K>;

			set(name: "labelAttr", value: string): void;
			set(name: "loadChildrenOnOpen", value: boolean): void;
			set(name: "multiple", value: boolean): void;
			set(name: "onFetch", value: Function): void;
			set<T>(name: "onLoadDeferred", value: dojo.Deferred<T>): void;
			set(name: "options", value: _SelectOption[]): void;
			set(name: "query", value: any): void;
			set(name: "queryOptions", value: Dojo.Store.QueryOptions): void;
			set(name: "sortByLabel", value: boolean): void;
			set<K>(name: "store", value: Dojo.Store._Store<Object, K>): void;

			watch(prop: "labelAttr", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "loadChildrenOnOpen", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "multiple", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "onFetch", callback: Dojo.WatchCallback<Function>): Dojo.WatchHandle;
			watch<T>(prop: "onLoadDeferred", callback: Dojo.WatchCallback<dojo.Deferred<T>>): Dojo.WatchHandle;
			watch(prop: "options", callback: Dojo.WatchCallback<_SelectOption[]>): Dojo.WatchHandle;
			watch(prop: "query", callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
			watch(prop: "queryOptions", callback: Dojo.WatchCallback<Dojo.Store.QueryOptions>): Dojo.WatchHandle;
			watch(prop: "sortByLabel", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch<K>(prop: "store", callback: Dojo.WatchCallback<Dojo.Store._Store<Object, K>>): Dojo.WatchHandle;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			addOption(option: _SelectOption): void;
			addOption(option: _SelectOption[]): void;

			getOptions(value: string): _SelectOption;
			getOptions(index: number): _SelectOption;
			getOptions(value: { value: number; }): _SelectOption;
			getOptions(option: _SelectOption): _SelectOption;
			getOptions(values: string[]): _SelectOption[];
			getOptions(indices: number[]): _SelectOption[];
			getOptions(values: { value: number; }[]): _SelectOption;
			getOptions(options: _SelectOption[]): _SelectOption[];
			getOptions(options: any[]): _SelectOption[];
			getOptions(): _SelectOption[];

			removeOption(value: string): void;
			removeOption(index: number): void;
			removeOption(value: { value: number; }): void;
			removeOption(option: _SelectOption): void;
			removeOption(values: string[]): void;
			removeOption(indices: number[]): void;
			removeOption(values: { value: number; }[]): void;
			removeOption(options: _SelectOption[]): void;
			removeOption(options: any[]): void;

			setStore<T extends Object, K>(store: Dojo.Store._Store<T, K>, selectedValue?: T, fetchArgs?: { query?: any; queryOptions?: Dojo.Store.QueryOptions; }): void;

			updateOption(option: _SelectOption): void;
			updateOption(options: _SelectOption[]): void;

			// Events
			on(type: "Blur", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Change", listener: (newValue: any) => void): Dojo.RemovableHandle;
			on(type: "Click", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Close", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "DblClick", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Focus", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Hide", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Input", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: "KeyDown", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "KeyPress", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "KeyUp", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "MouseDown", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseEnter", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseLeave", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseMove", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseOut", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseOver", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseUp", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Show", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "SetStore", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;
		}

		class Select extends _FormSelectWidget implements _HasDropDown, _KeyNavMixin {
			// dijit/form/_FormSelectWidget
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

			// dijit/form/_FormSelectMixin
			get(name: "labelAttr"): Object;
			get(name: "loadChildrenOnOpen"): boolean;
			get(name: "multiple"): boolean;
			get(name: "onFetch"): Function;
			get<T>(name: "onLoadDeferred"): dojo.Deferred<T>;
			get(name: "options"): _SelectOption[];
			get(name: "query"): any;
			get(name: "queryOptions"): Dojo.Store.QueryOptions;
			get(name: "sortByLabel"): boolean;
			get<K>(name: "store"): Dojo.Store._Store<Object, K>;

			set(name: "labelAttr", value: Object): void;
			set(name: "loadChildrenOnOpen", value: boolean): void;
			set(name: "multiple", value: boolean): void;
			set(name: "onFetch", value: Function): void;
			set<T>(name: "onLoadDeferred", value: dojo.Deferred<T>): void;
			set(name: "options", value: _SelectOption[]): void;
			set(name: "query", value: any): void;
			set(name: "queryOptions", value: Dojo.Store.QueryOptions): void;
			set(name: "sortByLabel", value: boolean): void;
			set<K>(name: "store", value: Dojo.Store._Store<Object, K>): void;

			watch(prop: "loadChildrenOnOpen", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "labelAttr", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
			watch(prop: "multiple", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "onFetch", callback: Dojo.WatchCallback<Function>): Dojo.WatchHandle;
			watch<T>(prop: "onLoadDeferred", callback: Dojo.WatchCallback<dojo.Deferred<T>>): Dojo.WatchHandle;
			watch(prop: "options", callback: Dojo.WatchCallback<_SelectOption[]>): Dojo.WatchHandle;
			watch(prop: "query", callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
			watch(prop: "queryOptions", callback: Dojo.WatchCallback<Dojo.Store.QueryOptions>): Dojo.WatchHandle;
			watch(prop: "sortByLabel", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch<K>(prop: "store", callback: Dojo.WatchCallback<Dojo.Store._Store<Object, K>>): Dojo.WatchHandle;

			// _HasDropDown
			get(name: "autoWidth"): boolean;
			get(name: "dropDown"): _WidgetBase;
			get(name: "dropDownPosition"): string[];
			get(name: "forceWidth"): boolean;
			get(name: "maxHeight"): number;

			set(name: "autoWidth", value: boolean): void;
			set(name: "dropDown", value: _WidgetBase): void;
			set(name: "dropDownPosition", value: string[]): void;
			set(name: "forceWidth", value: boolean): void;
			set(name: "maxHeight", value: number): void;

			watch(prop: "autoWidth", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "dropDown", callback: Dojo.WatchCallback<_WidgetBase>): Dojo.WatchHandle;
			watch(prop: "dropDownPosition", callback: Dojo.WatchCallback<string[]>): Dojo.WatchHandle;
			watch(prop: "forceWidth", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "maxHeight", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;

			closeDropDown(focus: boolean): void;
			isLoaded(): boolean;
			isValid(isFocused?: boolean): boolean;
			loadAndOpenDropDown(): Object;
			loadDropDown(loadCallback: Function): void;
			openDropDown(): any;
			toggleDropDown(): void;
			reset(): void;
			validate(isFocused: boolean): void;

			// _KeyNavMixin
			get(name: "childSelector"): Object;
			get(name: "focusedChild"): Object;
			get(name: "multiCharSearchDuration"): number;

			set(name: "childSelector", value: Object): void;
			set(name: "focusedChild", value: Object): void;
			set(name: "multiCharSearchDuration", value: number): void;

			watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
			watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
			watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;

			focus(): void;
			focusChild(widget: _WidgetBase, last: boolean): void;
			focusFirstChild(): void;
			focusLastChild(): void;

			onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;

			// Select
			get(name: "emptyLabel"): string;
			get(name: "message"): string;
			get(name: "required"): boolean;
			get(name: "state"): string;
			get(name: "tooltipPosition"): string[];

			set(name: "emptyLabel", value: string): void;
			set(name: "message", value: string): void;
			set(name: "required", value: boolean): void;
			set(name: "state", value: string): void;
			set(name: "tooltipPosition", value: string[]): void;

			watch(prop: "emptyLabel", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "message", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "required", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
			watch(prop: "state", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
			watch(prop: "tooltipPosition", callback: Dojo.WatchCallback<string[]>): Dojo.WatchHandle;

			// get/set/watch master signatures
			get(name: string): any;
			set(name: string, value: any, raiseChangeEvent?: boolean): void;
			set(values: Dojo.PropertiesMap): void;
			watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

			// Events
			on(type: "Blur", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Change", listener: (newValue: any) => void): Dojo.RemovableHandle;
			on(type: "Click", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Close", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "DblClick", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Focus", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Hide", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "Input", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: "KeyDown", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "KeyPress", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "KeyUp", listener: Dojo.EventListener<KeyboardEvent>): Dojo.RemovableHandle;
			on(type: "MouseDown", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseEnter", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseLeave", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseMove", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseOut", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseOver", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "MouseUp", listener: Dojo.EventListener<MouseEvent>): Dojo.RemovableHandle;
			on(type: "Show", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "SetStore", listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: "KeyboardSearch", listener: (item: _WidgetBase, evt: Event, searchString: string, numMatches: number) => void): Dojo.RemovableHandle;
			on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
			on(type: string, listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
			on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;
		}
	}
}

// Module definitions

declare module "dijit/form/Select"
{
	var Select: typeof dijit.form.Select;
	export = Select;
}