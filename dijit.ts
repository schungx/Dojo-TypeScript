/// <reference path="dojo.ts"/>

declare class DijitWidgetBase extends DojoStateful
{
  constructor(params?: Object, srcNodeRef?: HTMLElement);
	constructor(params?: Object, srcNodeRefId?: string);

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

	connect(obj: Object, event: string, method: string): GenericHandle;
	connect(obj: Object, event: DojoExtensionEvent, method: string): GenericHandle;
	connect(obj: Object, event: string, method: EventListener): GenericHandle;
	connect(obj: Object, event: DojoExtensionEvent, method: EventListener): GenericHandle;

	defer(fcn: GenericAction, delay: number): DojoHandle;
	destroy(preserveDom?: boolean): void;
	destroyDescendants(preserveDom?: boolean): void;
	destroyRecursive(preserveDom?: boolean): void;
	destroyRendering(preserveDom?: boolean): void;
	disconnect(handle: GenericHandle): void;
	emit(type: string, eventObj: Object, callbackArgs?: any[]): void;

	getChildren(): DijitWidgetBase[];
	getParent(): DijitWidgetBase;
	isFocusable(): boolean;
	isLeftToRight(): boolean;
	isValid(): boolean;

	on(type: string, func: GenericAction): DojoHandle;
	on(type: DojoExtensionEvent, func: GenericAction): DojoHandle;

	own(handle: DojoHandle): DojoHandle[];

	placeAt(referenceId: string, position: string): DijitWidgetBase;
	placeAt(referenceNode: HTMLElement, position: string): DijitWidgetBase;
	placeAt(referenceWidget: DijitWidgetBase, position: string): DijitWidgetBase;
	placeAt(referenceId: string, position: number): DijitWidgetBase;
	placeAt(referenceNode: HTMLElement, position: number): DijitWidgetBase;
	placeAt(referenceWidget: DijitWidgetBase, position: number): DijitWidgetBase;

	postCreate(): void;
	startup(): void;
	subscribe(topic: string, callback: GenericAction): GenericHandle;
	toString(): string;
	uninitialize(): boolean;
	unsubscribe(handle: GenericHandle): void;
}

declare class DijitWidget extends DijitWidgetBase implements DijitFocusMixin
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

interface DijitFocusMixin
{
	onBlur(): void;
	onFocus(): void;
}

interface DijitContainer
{
	addChild(widget: DijitWidgetBase, insertIndex?: number): void;
	getIndexOfChild(child: DijitWidgetBase): number;
	hasChildren(): boolean;
	removeChild(widget: DijitWidgetBase): void;
	removeChild(widget: number): void;
}

interface DijitContained
{
	getIndexInParent(): number;
	getNextSibling(): DijitWidgetBase;
	getPreviousSibling(): DijitWidgetBase;
}

interface DijitAttachMixin
{
	attachScope: Object;
	searchContainerNode: boolean;
}

interface DijitTemplatedMixin extends DijitAttachMixin
{
	templatePath: string;
	templateString: string;

	getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;
}

interface DijitKeyNavMixin extends DijitFocusMixin
{
	childSelector: Object;
	focusedChild: Object;
	multiCharSearchDuration: number;
	tabIndex: string;

	focus(): void;
	focusChild(widget: DijitWidgetBase, last: boolean): void;
	focusFirstChild(): void;
	focusLastChild(): void;

	onKeyboardSearch(item: DijitWidgetBase, event: Event, searchString: string, numMatches: number): void;
}

interface DijitKeyNavContainer extends DijitContainer //implements DijitKeyNavMixin
{
	// dijit/_KeyNavMixin
	childSelector: Object;
	focusedChild: Object;
	multiCharSearchDuration: number;
	tabIndex: string;

	focus(): void;
	focusChild(widget: DijitWidgetBase, last: boolean): void;
	focusFirstChild(): void;
	focusLastChild(): void;

	onKeyboardSearch(item: DijitWidgetBase, event: Event, searchString: string, numMatches: number): void;
}

interface DijitCssStateMixin
{
	active: boolean;
	cssStateNodes: { [attachPoint: string]: string; };
	hovering: boolean;
}
