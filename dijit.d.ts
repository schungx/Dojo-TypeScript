/************************************************************************/
/* Define Dojo widgets                                                  */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

// Overload on declare

declare module Dojo {
	interface Declare {
		(className: string, superclass: Dijit.WidgetOrMixin, props: DeclareOptions): dijit._WidgetBase;
		(className: string, superclasses: Dijit.WidgetOrMixin[], props: DeclareOptions): dijit._WidgetBase;
		(superclass: Dijit.WidgetOrMixin, props: DeclareOptions): dijit._WidgetBase;
		(superclasses: Dijit.WidgetOrMixin[], props: DeclareOptions): dijit._WidgetBase;
	}
}

// dijit

declare module Dijit {
	interface _Mixin extends Dijit.WidgetOrMixin { }
}
declare module dijit {
	// dijit/_Widget

	class _Widget extends _WidgetBase implements _FocusMixin {
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
		get(name: string): any;

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
		set(name: string, value: any, raiseChangeEvent?: boolean): void;
		set(values: Dojo.PropertiesMap): void;

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
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		onClick(event: MouseEvent): void;
		onDblClick(event: MouseEvent): void;
		onHide(): void;
		onKeyDown(event: KeyboardEvent): void;
		onKeyPress(event: KeyboardEvent): void;
		onKeyUp(event: KeyboardEvent): void;
		onMouseDown(event: MouseEvent): void;
		onMouseEnter(event: MouseEvent): void;
		onMouseLeave(event: MouseEvent): void;
		onMouseMove(event: MouseEvent): void;
		onMouseOut(event: MouseEvent): void;
		onMouseOver(event: MouseEvent): void;
		onMouseUp(event: MouseEvent): void;
		onShow(): void;

		// dijit/__FocusMixin
		onBlur(): void;
		onFocus(): void;
	}

	// Common widget mixin's

	interface _FocusMixin extends Dijit._Mixin {
		onBlur(): void;
		onFocus(): void;
	}

	interface _Container extends Dijit._Mixin {
		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;
	}

	interface _Contained extends Dijit._Mixin {
		getIndexInParent(): number;
		getNextSibling(): _WidgetBase;
		getPreviousSibling(): _WidgetBase;
	}

	interface _AttachMixin extends Dijit._Mixin {
		//attachScope: Object;
		//searchContainerNode: boolean;

		get(name: "attachScope"): Object;
		get(name: "searchContainerNode"): boolean;
		get(name: string): any;

		set(name: "attachScope", value: Object): void;
		set(name: "searchContainerNode", value: boolean): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "attachScope", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "searchContainerNode", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	interface _TemplatedMixin extends _AttachMixin {
		//templatePath: string;
		//templateString: string;

		get(name: "templatePath"): string;
		get(name: "templateString"): string;
		get(name: string): any;

		set(name: "templatePath", value: string): void;
		set(name: "templateString", value: string): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "templatePath", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: "templateString", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;
	}

	interface _KeyNavMixin extends _FocusMixin {
		//childSelector: Object;
		//focusedChild: Object;
		//multiCharSearchDuration: number;
		//tabIndex: string;

		get(name: "childSelector"): Object;
		get(name: "focusedChild"): Object;
		get(name: "multiCharSearchDuration"): number;
		get(name: "tabIndex"): string;
		get(name: string): any;

		set(name: "childSelector", value: Object): void;
		set(name: "focusedChild", value: Object): void;
		set(name: "multiCharSearchDuration", value: number): void;
		set(name: "tabIndex", value: string): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "childSelector", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "focusedChild", callback: Dojo.WatchCallback<Object>): Dojo.WatchHandle;
		watch(prop: "multiCharSearchDuration", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: "tabIndex", callback: Dojo.WatchCallback<string>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		focus(): void;
		focusChild(widget: _WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;
	}

	interface _KeyNavContainer extends _Container, _KeyNavMixin {
	}

	interface _CssStateMixin extends Dijit._Mixin {
		//active: boolean;
		//cssStateNodes: { [attachPoint: string]: string; };
		//hovering: boolean;

		get(name: "active"): boolean;
		get(name: "cssStateNodes"): { [attachPoint: string]: string; };
		get(name: "hovering"): boolean;
		get(name: string): any;

		set(name: "active", value: boolean): void;
		set(name: "cssStateNodes", value: { [attachPoint: string]: string; }): void;
		set(name: "hovering", value: boolean): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "active", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "cssStateNodes", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "hovering", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	interface _WidgetsInTemplateMixin extends Dijit._Mixin {
		//contextRequire:
		//widgetsInTemplate: boolean;

		get(name: "widgetsInTemplate"): boolean;
		get(name: string): any;

		set(name: "widgetsInTemplate", value: boolean): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "widgetsInTemplate", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;
	}

	interface _HasDropDown extends Dijit._Mixin {
		//autoWidth: boolean;
		//dropDown: _Widget;
		//dropDownPosition: string[];
		//forceWidth: boolean;
		//maxHeight: number;

		get(name: "autoWidth"): boolean;
		get(name: "dropDown"): _Widget;
		get(name: "dropDownPosition"): string[];
		get(name: "forceWidth"): boolean;
		get(name: "maxHeight"): number;
		get(name: string): any;

		set(name: "autoWidth", value: boolean): void;
		set(name: "dropDown", value: _Widget): void;
		set(name: "dropDownPosition", value: string[]): void;
		set(name: "forceWidth", value: boolean): void;
		set(name: "maxHeight", value: number): void;
		set(name: string, value: any, raiseChangeEvent?: boolean): void;

		watch(prop: "autoWidth", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "dropDown", callback: Dojo.WatchCallback<_Widget>): Dojo.WatchHandle;
		watch(prop: "dropDownPosition", callback: Dojo.WatchCallback<string[]>): Dojo.WatchHandle;
		watch(prop: "forceWidth", callback: Dojo.WatchCallback<boolean>): Dojo.WatchHandle;
		watch(prop: "maxHeight", callback: Dojo.WatchCallback<number>): Dojo.WatchHandle;
		watch(prop: string, callback: Dojo.WatchCallback<any>): Dojo.WatchHandle;

		closeDropDown(focus: boolean): void;
		isLoaded(): boolean;
		loadAndOpenDropDown(): Object;
		loadDropDown(loadCallback: Function): void;
		openDropDown(): any;
		toggleDropDown(): void;
	}
}

// dijit module definitions

declare module "dijit/_Widget"
{
	var _Widget: typeof dijit._Widget;
	export = _Widget;
}
declare module "dijit/_WidgetBase"
{
	var _WidgetBase: typeof dijit._WidgetBase;
	export = _WidgetBase;
}
declare module "dijit/_FocusMixin"
{
	var _FocusMixin: dijit._FocusMixin;
	export = _FocusMixin;
}
declare module "dijit/_Container"
{
	var _Container: dijit._Container;
	export = _Container;
}
declare module "dijit/_Contained"
{
	var _Contained: dijit._Contained;
	export = _Contained;
}
declare module "dijit/_AttachMixin"
{
	var _AttachMixin: dijit._AttachMixin;
	export = _AttachMixin;
}
declare module "dijit/_TemplatedMixin"
{
	var _TemplatedMixin: dijit._TemplatedMixin;
	export = _TemplatedMixin;
}
declare module "dijit/_KeyNavMixin"
{
	var _KeyNavMixin: dijit._KeyNavMixin;
	export = _KeyNavMixin;
}
declare module "dijit/_KeyNavContainer"
{
	var _KeyNavContainer: dijit._KeyNavContainer;
	export = _KeyNavContainer;
}
declare module "dijit/_CssStateMixin"
{
	var _CssStateMixin: dijit._CssStateMixin;
	export = _CssStateMixin;
}
declare module "dijit/_WidgetsInTemplateMixin"
{
	var _WidgetsInTemplateMixin: dijit._WidgetsInTemplateMixin;
	export = _WidgetsInTemplateMixin;
}

// dijit/registry

declare module Dijit {
	interface Registry extends Array<dijit._WidgetBase> {
		byId(id: string): dijit._WidgetBase;
		byNode(node: HTMLElement): dijit._WidgetBase;
		findWidgets(root: HTMLElement, skipNode?: HTMLElement): dijit._WidgetBase[];
		getEnclosingWidget(node: HTMLElement): dijit._WidgetBase;
		getUniqueId(widgetType: string): string;
		add(widget: dijit._WidgetBase): void;
		remove(id: string): void;
		toArray(): dijit._WidgetBase[];
	}
}
declare module "dijit/registry"
{
	var registry: Dijit.Registry;
	export = registry;
}

// dijit/place

declare module Dijit {
	interface _PlaceResult extends Dojo.Rectangle {
		corner: string;
		aroundCorner: string;
		overflow: number;
		spaceAvailable: Dojo.Size;
	}

	interface Place {
		around(node: HTMLElement, anchor: HTMLElement, positions?: string[], leftToRight?: boolean, layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): _PlaceResult;
		around(node: HTMLElement, anchor: Dojo.Rectangle, positions?: string[], leftToRight?: boolean, layoutNode?: (node, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): _PlaceResult;

		at(node: HTMLElement, pos: Dojo.Point, corners?: string[], layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.Size) => number): void;
	}
}
declare module "dijit/place"
{
	var place: Dijit.Place;
	export = place;
}