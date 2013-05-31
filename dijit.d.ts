/************************************************************************/
/* Define Dojo widgets                                                  */
/************************************************************************/

/// <reference path="dojo.d.ts"/>

declare module Dijit
{
	export class WidgetBase extends _Widget
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

		connect(obj: Object, event: string, method: string): Dojo.Handle;
		connect(obj: Object, event: Dojo.ExtensionEvent, method: string): Dojo.Handle;
		connect(obj: Object, event: string, method: EventListener): Dojo.Handle;
		connect(obj: Object, event: Dojo.ExtensionEvent, method: EventListener): Dojo.Handle;

		defer(fcn: Dojo.Action, delay: number): Dojo.RemovableHandle;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom?: boolean): void;
		destroyRecursive(preserveDom?: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: Dojo.Handle): void;
		emit(type: string, eventObj: Object, callbackArgs?: any[]): void;

		getChildren(): WidgetBase[];
		getParent(): WidgetBase;
		isFocusable(): boolean;
		isLeftToRight(): boolean;
		isValid(): boolean;

		on(type: string, func: Dojo.Action): Dojo.RemovableHandle;
		on(type: Dojo.ExtensionEvent, func: Dojo.Action): Dojo.RemovableHandle;

		own(handle: Dojo.RemovableHandle): Dojo.RemovableHandle[];

		placeAt(referenceId: string, position: string): WidgetBase;
		placeAt(referenceNode: HTMLElement, position: string): WidgetBase;
		placeAt(referenceWidget: WidgetBase, position: string): WidgetBase;
		placeAt(referenceId: string, position: number): WidgetBase;
		placeAt(referenceNode: HTMLElement, position: number): WidgetBase;
		placeAt(referenceWidget: WidgetBase, position: number): WidgetBase;

		postCreate(): void;
		startup(): void;
		subscribe(topic: string, callback: Dojo.Action): Dojo.Handle;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Dojo.Handle): void;
	}

	export class Widget extends WidgetBase implements FocusMixin
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

		// dijit/_FocusMixin
		onBlur(): void;
		onFocus(): void;
	}

	// Widget mixin's

	export interface FocusMixin
	{
		onBlur(): void;
		onFocus(): void;
	}

	export interface Container
	{
		addChild(widget: WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: WidgetBase): void;
		removeChild(widget: number): void;
	}

	export interface Contained
	{
		getIndexInParent(): number;
		getNextSibling(): WidgetBase;
		getPreviousSibling(): WidgetBase;
	}

	export interface AttachMixin
	{
		attachScope: Object;
		searchContainerNode: boolean;
	}

	export interface TemplatedMixin extends AttachMixin
	{
		templatePath: string;
		templateString: string;

		getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;
	}

	export interface KeyNavMixin extends FocusMixin
	{
		childSelector: Object;
		focusedChild: Object;
		multiCharSearchDuration: number;
		tabIndex: string;

		focus(): void;
		focusChild(widget: WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		onKeyboardSearch(item: WidgetBase, event: Event, searchString: string, numMatches: number): void;
	}

	export interface KeyNavContainer extends Container //implements KeyNavMixin
	{
		// dijit/_KeyNavMixin
		childSelector: Object;
		focusedChild: Object;
		multiCharSearchDuration: number;
		tabIndex: string;

		focus(): void;
		focusChild(widget: WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		onKeyboardSearch(item: WidgetBase, event: Event, searchString: string, numMatches: number): void;
	}

	export interface CssStateMixin
	{
		active: boolean;
		cssStateNodes: { [attachPoint: string]: string; };
		hovering: boolean;
	}
}
