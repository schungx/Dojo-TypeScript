/************************************************************************/
/* Define menu widgets                                                  */
/************************************************************************/

/// <reference path="dijit.ts"/>

// dijit/MenuBase

declare class DijitMenuBase extends DijitWidget implements DijitTemplatedMixin, DijitKeyNavContainer, DijitCssStateMixin
{
	activated: boolean;
	autoFocus: boolean;
	childSelector(node: HTMLElement): void;
	parentMenu: DijitMenuBase;
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
declare module "dijit/MenuBase" { export = DijitMenuBase; }

// dijit/DropDownMenu

declare class DijitDropDownMenu extends DijitMenuBase
{
}
declare module "dijit/DropDownMenu" { export = DijitDropDownMenu; }

// dijit/Menu

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
declare module "dijit/Menu" { export = DijitMenu; }

// dijit/MenuItem

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
declare module "dijit/MenuItem" { export = DijitMenuItem; }

// dijit/MenuSeparator

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
declare module "dijit/MenuSeparator" { export = DijitMenuSeparator; }
