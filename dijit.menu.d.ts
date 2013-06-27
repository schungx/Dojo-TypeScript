/************************************************************************/
/* Define menu widgets                                                  */
/************************************************************************/

/// <reference path="dijit.d.ts"/>

declare module Dijit
{
	// dijit/MenuBase

	class MenuBase extends Widget implements _TemplatedMixin, _KeyNavContainer, _CssStateMixin
	{
		activated: boolean;
		autoFocus: boolean;
		childSelector(node: HTMLElement): void;
		parentMenu: MenuBase;
		passivePopupDelay: number;
		popupDelay: number;
		selected: MenuItem;

		onCancel(closeAll: boolean): void;
		onExecute(): void;
		onItemHover(item: MenuItem): void;
		onItemUnhover(item: MenuItem): void;

		onKeyboardSearch(item: _WidgetBase, event: Event, searchString: string, numMatches: number): void;
		onKeyboardSearch(item: MenuItem, event: Event, searchString: string, numMatches: number): void;

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
		focusChild(widget: _WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;

		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;

		// dijit/_CssStateMixin
		active: boolean;
		cssStateNodes: { [attachPoint: string]: string; };
		hovering: boolean;
	}

	// dijit/DropDownMenu

	class DropDownMenu extends MenuBase
	{
	}

	// dijit/Menu

	class Menu extends DropDownMenu
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

	// dijit/MenuItem

	class MenuItem extends Widget implements _TemplatedMixin, _Container, _CssStateMixin
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
		addChild(widget: _WidgetBase, insertIndex?: number): void;
		getIndexOfChild(child: _WidgetBase): number;
		hasChildren(): boolean;
		removeChild(widget: _WidgetBase): void;
		removeChild(widget: number): void;

		// dijit/_CssStateMixin
		active: boolean;
		cssStateNodes: { [attachPoint: string]: string; };
		hovering: boolean;
	}

	// dijit/MenuSeparator

	class MenuSeparator extends _WidgetBase implements _TemplatedMixin, _Contained
	{
		// dijit/_TemplatedMixin
		attachScope: Object;
		searchContainerNode: boolean;
		templatePath: string;
		templateString: string;
		getCachedTemplate(templateString: string, alwaysUseString: boolean, doc?: HTMLDocument): any;

		// dijit/_Contained
		getIndexInParent(): number;
		getNextSibling(): _WidgetBase;
		getPreviousSibling(): _WidgetBase;
	}
}


// Module definitions

declare module "dijit/MenuBase" {
	var MenuBase: Dijit.MenuBase;
	export = MenuBase;
}
declare module "dijit/DropDownMenu" {
	var DropDownMenu: Dijit.DropDownMenu;
	export = DropDownMenu;
}
declare module "dijit/Menu" {
	var Menu: Dijit.Menu;
	export = Menu;
}
declare module "dijit/MenuItem" {
	var MenuItem: Dijit.MenuItem;
	export = MenuItem;
}
declare module "dijit/MenuSeparator" {
	var MenuSeparator: Dijit.MenuSeparator;
	export = MenuSeparator;
}
