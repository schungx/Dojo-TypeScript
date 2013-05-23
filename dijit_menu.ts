/// <reference path="dijit.ts"/>

declare class DijitMenuBase extends DijitWidget implements DijitTemplatedMixin, DijitKeyNavContainer, DijitCssStateMixin
{
  activated: boolean;
	autoFocus: boolean;
	childSelector(node: HTMLElement): void;
	parentMenu: DijitMenu;
	passivePopupDelay: number;
	popupDelay: number;
	selected: DijitMenuItem;

	onCancel(closeAll: boolean): void;
	onExecute(): void;
	onItemHover(item: DijitMenuItem): void;
	onItemUnhover(item: DijitMenuItem): void;

	onKeyboardSearch(item: DijitMenuItem, event: Event, searchString: string, numMatches: number): void;

	// dijit/_TemplatedMixin
	attachScope: Object;
	searchContainerNode: boolean;
	templatePath: string;
	templateString: string;
	getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;

	// dijit/_KeyNavContainer
	focusedChild: Object;
	multiCharSearchDuration: number;
	tabIndex: string;

	focus(): void;
	focusChild(widget: DijitWidgetBase, last: boolean): void;
	focusFirstChild(): void;
	focusLastChild(): void;

	addChild(widget: DijitWidgetBase, insertIndex?: number): void;
	getIndexOfChild(child: DijitWidgetBase): number;
	hasChildren(): boolean;
	removeChild(widget: DijitWidgetBase): void;
	removeChild(widget: number): void;

	// dijit/_CssStateMixin
	active: boolean;
	cssStateNodes: { [attachPoint: string]: string; };
	hovering: boolean;
}

declare class DijitDropDownMenu extends DijitMenuBase
{
}

declare class DijitMenu extends DijitDropDownMenu
{
	contextMenuForWindow: boolean;
	currentTarget: HTMLElement;
	leftClickToOpen: boolean;
	refocus: boolean;
	selector: Object;
	targetNodeIds: string[];

	bindDomNode(nodeId: string): void;
	bindDomNode(node: HTMLElement): void;
	destroy(): void;

	unBindDomNode(nodeId: string): void;
	unBindDomNode(node: HTMLElement): void;
}
interface IDijitMenu
{
	new (params?: Object, srcNodeRef?: HTMLElement): DijitMenu;
	new (params?: Object, srcNodeRefId?: string): DijitMenu;
}

declare class DijitMenuItem extends DijitWidget implements DijitTemplatedMixin, DijitContainer, DijitCssStateMixin
{
	accelKey: string;
	disabled: boolean;
	iconClass: string;
	label: string;
	shortcutKey: string;

	focus(): void;

	// dijit/_TemplatedMixin
	attachScope: Object;
	searchContainerNode: boolean;
	templatePath: string;
	templateString: string;
	getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;

	// dijit/_Container
	addChild(widget: DijitWidgetBase, insertIndex?: number): void;
	getIndexOfChild(child: DijitWidgetBase): number;
	hasChildren(): boolean;
	removeChild(widget: DijitWidgetBase): void;
	removeChild(widget: number): void;

	// dijit/_CssStateMixin
	active: boolean;
	cssStateNodes: { [attachPoint: string]: string; };
	hovering: boolean;
}
interface IDijitMenuItem
{
	new (params?: Object, srcNodeRef?: HTMLElement): DijitMenuItem;
	new (params?: Object, srcNodeRefId?: string): DijitMenuItem;
}

declare class DijitMenuSeparator extends DijitWidgetBase implements DijitTemplatedMixin, DijitContained
{
	// dijit/_TemplatedMixin
	attachScope: Object;
	searchContainerNode: boolean;
	templatePath: string;
	templateString: string;
	getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;

	// dijit/_Contained
	getIndexInParent(): number;
	getNextSibling(): DijitWidgetBase;
	getPreviousSibling(): DijitWidgetBase;
}
interface IDijitMenuSeparator
{
	new (params?: Object, srcNodeRef?: HTMLElement): DijitMenuSeparator;
	new (params?: Object, srcNodeRefId?: string): DijitMenuSeparator;
}
