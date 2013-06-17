/************************************************************************/
/* Define Dojo widgets                                                  */
/************************************************************************/

/// <reference path="dojo.d.ts"/>

declare module Dijit
{

	// dijit/_WidgetBase

	export class _WidgetBase extends _Widget
	{
		baseClass: string;
		class: string;
		containerNode: HTMLElement;
		dir: string;
		domNode: HTMLElement;
		focused: boolean;
		id: string;
		lang: string;
		ownerDocument: HTMLDocument;
		postMixInProperties: string;
		srcNodeRef: HTMLElement;
		style: { [style: string]: string; };
		title: string;
		tooltip: string;

		buildRendering(): void;

		/* Deprecated
				connect(obj: Object, event: string, method: string): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: string): Dojo.Handle;
				connect(obj: Object, event: string, method: EventListener): Dojo.Handle;
				connect(obj: Object, event: Dojo.ExtensionEvent, method: EventListener): Dojo.Handle;

				disconnect(handle: Dojo.Handle): void;
		*/

		defer(fcn: Dojo.Action, delay: number): Dojo.RemovableHandle;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom?: boolean): void;
		destroyRecursive(preserveDom?: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		emit(type: string, eventObj: Object, callbackArgs?: any[]): void;

		getChildren(): _WidgetBase[];
		getParent(): _WidgetBase;
		isFocusable(): boolean;
		isLeftToRight(): boolean;
		isValid(): boolean;

		on(type: string, listener: Dojo.Action): Dojo.RemovableHandle;
		on(type: "abort", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "afterprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeprint", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): Dojo.RemovableHandle;
		on(type: "blur", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "canplay", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "canplaythrough", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "change", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "click", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "contextmenu", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dblclick", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drag", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragend", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragenter", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragleave", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragover", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "dragstart", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "drop", listener: (ev: DragEvent) => boolean): Dojo.RemovableHandle;
		on(type: "durationchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "emptied", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "ended", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "focus", listener: (ev: FocusEvent) => boolean): Dojo.RemovableHandle;
		on(type: "hashchange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "input", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "keydown", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keypress", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "keyup", listener: (ev: KeyboardEvent) => boolean): Dojo.RemovableHandle;
		on(type: "load", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadeddata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadedmetadata", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "loadstart", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "message", listener: (ev: MessageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousedown", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousemove", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseout", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseover", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mouseup", listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
		on(type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): Dojo.RemovableHandle;
		on(type: "offline", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "online", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "pause", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "play", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "playing", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "progress", listener: (ev: any) => boolean): Dojo.RemovableHandle;
		on(type: "ratechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "readystatechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "reset", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "resize", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "scroll", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "seeked", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "seeking", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "select", listener: (ev: UIEvent) => boolean): Dojo.RemovableHandle;
		on(type: "stalled", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "storage", listener: (ev: StorageEvent) => boolean): Dojo.RemovableHandle;
		on(type: "submit", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "suspend", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "timeupdate", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "unload", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "volumechange", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: "waiting", listener: (ev: Event) => boolean): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;

		own(handle: Dojo.RemovableHandle): Dojo.RemovableHandle[];

		placeAt(referenceId: string, position: string): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: string): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: string): _WidgetBase;
		placeAt(referenceId: string, position: number): _WidgetBase;
		placeAt(referenceNode: HTMLElement, position: number): _WidgetBase;
		placeAt(referenceWidget: _WidgetBase, position: number): _WidgetBase;

		postCreate(): void;
		startup(): void;
		toString(): string;

		/* Deprecated
				subscribe(topic: string, callback: Dojo.Action): Dojo.Handle;
				uninitialize(): boolean;
				unsubscribe(handle: Dojo.Handle): void;
		*/
	}

	// dijit/Widget

	export class Widget extends _WidgetBase implements _FocusMixin
	{
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

	export interface _FocusMixin
	{
		onBlur(): void;
		onFocus(): void;
	}

	export interface _Container
	{
		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;
	}

	export interface _Contained
	{
		getIndexInParent(): number;
		getNextSibling(): _WidgetBase;
		getPreviousSibling(): _WidgetBase;
	}

	export interface _AttachMixin
	{
		attachScope: Object;
		searchContainerNode: boolean;
	}

	export interface _TemplatedMixin extends _AttachMixin
	{
		templatePath: string;
		templateString: string;

		getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;
	}

	export interface _KeyNavMixin extends _FocusMixin
	{
		childSelector: Object;
		focusedChild: Object;
		multiCharSearchDuration: number;
		tabIndex: string;

		focus(): void;
		focusChild(widget: _WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;
	}

	export interface _KeyNavContainer extends _Container, _KeyNavMixin
	{
	}

	export interface _CssStateMixin
	{
		active: boolean;
		cssStateNodes: { [attachPoint: string]: string; };
		hovering: boolean;
	}
}

// dijit/registry

declare module Dijit
{
	export interface Registry extends Array<_WidgetBase>
	{
		byId(id: string): _WidgetBase;
		byNode(node: HTMLElement): _WidgetBase;
		findWidgets(root: HTMLElement, skipNode?: HTMLElement): _WidgetBase[];
		getEnclosingWidget(node: HTMLElement): _WidgetBase;
		getUniqueId(widgetType: string): string;
		add(widget: _WidgetBase): void;
		remove(id: string): void;
		toArray(): _WidgetBase[];
	}
}

declare module "dijit/registry" 
{
	var registry: Dijit.Registry;
	export = registry;
}

// dijit/place

declare module "dijit/place"
{
	export interface _ReturnValues extends Dojo.Rectangle
	{
		corner: string;
		aroundCorner: string;
		overflow: number;
		spaceAvailable: Dojo.BoxWH;
	}

	export function around(node: HTMLElement, anchor: HTMLElement, positions?: string[], leftToRight?: boolean, layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.BoxWH) => number): _ReturnValues;
	export function around(node: HTMLElement, anchor: Dojo.Rectangle, positions?: string[], leftToRight?: boolean, layoutNode?: (node, aroundNodeCorner: string, nodeCorner: string, size: Dojo.BoxWH) => number): _ReturnValues;

	export function at(node: HTMLElement, pos: Dojo.Point, corners?: string[], layoutNode?: (node: HTMLElement, aroundNodeCorner: string, nodeCorner: string, size: Dojo.BoxWH) => number): void;
}

// dijit/form

declare module Dijit
{
	export module Form
	{
		export interface _FormMixin
		{
			state: string;

			connectChildren(inStartup: boolean): void;
			reset(): void;
			validate(): void;
		}
	}
}
