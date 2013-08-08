/************************************************************************/
/* Define menu widgets                                                  */
/************************************************************************/

/// <reference path="dijit.d.ts"/>

declare module dijit
{
	// dijit/MenuBase

	class MenuBase extends _Widget implements _TemplatedMixin, _KeyNavContainer, _CssStateMixin
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


		private activated: boolean;
		private autoFocus: boolean;
		private parentMenu: MenuBase;
		private passivePopupDelay: number;
		private popupDelay: number;
		private selected: MenuItem;

		get(name: "activated"): boolean;
		get(name: "autoFocus"): boolean;
		get(name: "parentMenu"): MenuBase;
		get(name: "passivePopupDelay"): number;
		get(name: "popupDelay"): number;
		get(name: "selected"): MenuItem;

		set(name: "activated", value: boolean): void;
		set(name: "autoFocus", value: boolean): void;
		set(name: "parentMenu", value: MenuBase): void;
		set(name: "passivePopupDelay", value: number): void;
		set(name: "popupDelay", value: number): void;
		set(name: "selected", value: MenuItem): void;

		watch(prop: "activated", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "autoFocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "parentMenu", callback: Dojo.WatchCallback<MenuBase>): Dojo.WatchHandle;
		watch(prop: "passivePopupDelay", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "popupDelay", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "selected", callback: Dojo.WatchCallback<MenuItem>): Dojo.WatchHandle;

		childSelector(node: HTMLElement): void;

		onCancel(closeAll: boolean): void;
		onExecute(): void;
		onItemHover(item: MenuItem): void;
		onItemUnhover(item: MenuItem): void;

		onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;
		onKeyboardSearch(item: MenuItem, event: Event, searchString: string, numMatches: number): void;

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

		// dijit/_KeyNavContainer
		get(name: "childSelector"): Object;
		get(name: "focusedChild"): Object;
		get(name: "multiCharSearchDuration"): number;
		get(name: "tabIndex"): string;

		set(name: "childSelector", value: Object): void;
		set(name: "focusedChild", value: Object): void;
		set(name: "multiCharSearchDuration", value: number): void;
		set(name: "tabIndex", value: string): void;

		watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "tabIndex", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

		focus(): void;
		focusChild(widget: _WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;

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


		// get/set/watch master signatures
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	// dijit/DropDownMenu

	class DropDownMenu extends MenuBase
	{
		// MenuBase
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

		get(name: "activated"): boolean;
		get(name: "autoFocus"): boolean;
		get(name: "parentMenu"): MenuBase;
		get(name: "passivePopupDelay"): number;
		get(name: "popupDelay"): number;
		get(name: "selected"): MenuItem;
		get(name: "attachScope"): Object;
		get(name: "searchContainerNode"): boolean;
		get(name: "templatePath"): string;
		get(name: "templateString"): string;
		get(name: "childSelector"): Object;
		get(name: "focusedChild"): Object;
		get(name: "multiCharSearchDuration"): number;
		get(name: "tabIndex"): string;
		get(name: "active"): boolean;
		get(name: "cssStateNodes"): { [attachPoint: string]: string; };
		get(name: "hovering"): boolean;

		set(name: "activated", value: boolean): void;
		set(name: "autoFocus", value: boolean): void;
		set(name: "parentMenu", value: MenuBase): void;
		set(name: "passivePopupDelay", value: number): void;
		set(name: "popupDelay", value: number): void;
		set(name: "selected", value: MenuItem): void;
		set(name: "attachScope", value: Object): void;
		set(name: "searchContainerNode", value: boolean): void;
		set(name: "templatePath", value: string): void;
		set(name: "templateString", value: string): void;
		set(name: "childSelector", value: Object): void;
		set(name: "focusedChild", value: Object): void;
		set(name: "multiCharSearchDuration", value: number): void;
		set(name: "tabIndex", value: string): void;
		set(name: "active", value: boolean): void;
		set(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
		set(name: "hovering", value: boolean): void;

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
		watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "tabIndex", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<{ [attachPoint: string]: string; }>): Dojo.WatchHandle;
		watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;


		// get/set/watch master signatures
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	// dijit/Menu

	class Menu extends DropDownMenu
	{
		// DropDownMenu
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

		get(name: "activated"): boolean;
		get(name: "autoFocus"): boolean;
		get(name: "parentMenu"): MenuBase;
		get(name: "passivePopupDelay"): number;
		get(name: "popupDelay"): number;
		get(name: "selected"): MenuItem;
		get(name: "attachScope"): Object;
		get(name: "searchContainerNode"): boolean;
		get(name: "templatePath"): string;
		get(name: "templateString"): string;
		get(name: "childSelector"): Object;
		get(name: "focusedChild"): Object;
		get(name: "multiCharSearchDuration"): number;
		get(name: "tabIndex"): string;
		get(name: "active"): boolean;
		get(name: "cssStateNodes"): { [attachPoint: string]: string; };
		get(name: "hovering"): boolean;

		set(name: "activated", value: boolean): void;
		set(name: "autoFocus", value: boolean): void;
		set(name: "parentMenu", value: MenuBase): void;
		set(name: "passivePopupDelay", value: number): void;
		set(name: "popupDelay", value: number): void;
		set(name: "selected", value: MenuItem): void;
		set(name: "attachScope", value: Object): void;
		set(name: "searchContainerNode", value: boolean): void;
		set(name: "templatePath", value: string): void;
		set(name: "templateString", value: string): void;
		set(name: "childSelector", value: Object): void;
		set(name: "focusedChild", value: Object): void;
		set(name: "multiCharSearchDuration", value: number): void;
		set(name: "tabIndex", value: string): void;
		set(name: "active", value: boolean): void;
		set(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
		set(name: "hovering", value: boolean): void;

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
		watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "tabIndex", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<{ [attachPoint: string]: string; }>): Dojo.WatchHandle;
		watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;


		private contextMenuForWindow: boolean;
		private currentTarget: HTMLElement;
		private leftClickToOpen: boolean;
		private refocus: boolean;
		private selector: Object;
		private targetNodeIds: string[];

		get(name: "contextMenuForWindow"): boolean;
		get(name: "currentTarget"): HTMLElement;
		get(name: "leftClickToOpen"): boolean;
		get(name: "refocus"): boolean;
		get(name: "selector"): Object;
		get(name: "targetNodeIds"): string[];

		set(name: "contextMenuForWindow", value: boolean): void;
		set(name: "currentTarget", value: HTMLElement): void;
		set(name: "leftClickToOpen", value: boolean): void;
		set(name: "refocus", value: boolean): void;
		set(name: "selector", value: Object): void;
		set(name: "targetNodeIds", value: string[]): void;

		watch(prop: "contextMenuForWindow", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "currentTarget", callback: Dojo.WatchCallback<HTMLElement>): Dojo.WatchHandle;
		watch(prop: "leftClickToOpen", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "refocus", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "selector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "targetNodeIds", callback: Dojo.WatchCallback<string[]>): Dojo.WatchHandle;

		bindDomNode(nodeId: string): void;
		bindDomNode(node: HTMLElement): void;
		destroy(): void;

		unBindDomNode(nodeId: string): void;
		unBindDomNode(node: HTMLElement): void;


		// get/set/watch master signatures
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	// dijit/MenuItem

	class MenuItem extends _Widget implements _TemplatedMixin, _Container, _CssStateMixin
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


		private accelKey: string;
		private disabled: boolean;
		private iconClass: string;
		private label: string;
		private shortcutKey: string;

		get(name: "accelKey"): string;
		get(name: "disabled"): boolean;
		get(name: "iconClass"): string;
		get(name: "label"): string;
		get(name: "shortcutKey"): string;

		set(name: "accelKey", value: string): void;
		set(name: "disabled", value: boolean): void;
		set(name: "iconClass", value: string): void;
		set(name: "label", value: string): void;
		set(name: "shortcutKey", value: string): void;

		watch(prop: "accelKey", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "disabled", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "iconClass", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "label", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "shortcutKey", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;

		focus(): void;

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

		// dijit/_Container
		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;

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


		// get/set/watch master signatures
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	// dijit/MenuSeparator

	class MenuSeparator extends _WidgetBase implements _TemplatedMixin, _Contained
	{
		// dijit/_WidgetBase
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

		// dijit/_Contained
		getIndexInParent(): number;
		getNextSibling(): _WidgetBase;
		getPreviousSibling(): _WidgetBase;


		// get/set/watch master signatures
		get(name: string): any;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}
}


// Module definitions

declare module "dijit/MenuBase" 
{
	class MenuBase extends dijit.MenuBase { }
	export = MenuBase;
}
declare module "dijit/DropDownMenu" 
{
	class DropDownMenu extends dijit.DropDownMenu { }
	export = DropDownMenu;
}
declare module "dijit/Menu" 
{
	class Menu extends dijit.Menu { }
	export = Menu;
}
declare module "dijit/MenuItem" 
{
	class MenuItem extends dijit.MenuItem { }
	export = MenuItem;
}
declare module "dijit/MenuSeparator" 
{
	class MenuSeparator extends dijit.MenuSeparator { }
	export = MenuSeparator;
}
