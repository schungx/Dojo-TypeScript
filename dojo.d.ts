/************************************************************************/
/* Define core Dojo features                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

// dojo/ready

declare module "dojo/ready"
{
	function ready(priority: number, context: Object, callback: Dojo.BlankFunction): void;
	function ready(context: Object, callback: Dojo.BlankFunction): void;
	function ready(callback: Dojo.BlankFunction): void;

	export = ready;
}

// dojo/domReady

declare module "dojo/domReady"
{
	function domReady(callback: Dojo.BlankFunction): void;

	export = domReady;
}

// dojo/_base/array

declare module "dojo/_base/array"
{
	export function indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
	export function lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

	export function forEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void , context?: Object): void;
	export function forEach<T>(array: T[], callback: string, context?: Object): void;
	export function forEach<T>(array: string, callback: (item: string, index: number, array: string) => void , context?: Object): void;
	export function forEach<T>(array: string, callback: string, context?: Object): void;

	export function filter<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, context?: Object): void;
	export function filter<T>(array: T[], callback: string, context?: Object): void;
	export function filter(array: string, callback: (item: string, index: number, array: string) => boolean, context?: Object): void;
	export function filter(array: string, callback: string, context?: Object): void;

	export function map<T, V>(array: T[], callback: (item: T, index: number, array: T[]) => V, context?: Object): V[];
	export function map<T, V>(array: T[], callback: string, context?: Object): V[];
	export function map<V>(array: string, callback: (item: string, index: number, array: string) => V, context?: Object): V[];
	export function map<V>(array: string, callback: string, context?: Object): V[];

	export function some<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, context?: Object): boolean;
	export function some<T>(array: T[], callback: string, context?: Object): boolean;
	export function some(array: string, callback: (item: string, index: number, array: string) => boolean, context?: Object): boolean;
	export function some(array: string, callback: string, context?: Object): boolean;

	export function every<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, context?: Object): boolean;
	export function every<T>(array: T[], callback: string, context?: Object): boolean;
	export function every(array: string, callback: (item: string, index: number, array: string) => boolean, context?: Object): boolean;
	export function every(array: string, callback: string, context?: Object): boolean;
}

// dojo/_base/Color

declare module "dojo/_base/Color"
{
	class Color
	{
		constructor();
		constructor(colors: any[]);
		constructor(color: string);
		constructor(color: Object);

		a: number;
		r: number;
		g: number;
		b: number;

		named: {
			"aliceblue": number[];
			"antiquewhite": number[];
			"aquamarine": number[];
			"azure": number[];
			"beige": number[];
			"bisque": number[];
			"blanchedalmond": number[];
			"blueviolet": number[];
			"brown": number[];
			"burlywood": number[];
			"cadetblue": number[];
			"chartreuse": number[];
			"chocolate": number[];
			"coral": number[];
			"cornflowerblue": number[];
			"cornsilk": number[];
			"crimson": number[];
			"cyan": number[];
			"darkblue": number[];
			"darkcyan": number[];
			"darkgoldenrod": number[];
			"darkgray": number[];
			"darkgreen": number[];
			"darkgrey": number[];
			"darkkhaki": number[];
			"darkmagenta": number[];
			"darkolivegreen": number[];
			"darkorange": number[];
			"darkorchid": number[];
			"darkred": number[];
			"darksalmon": number[];
			"darkseagreen": number[];
			"darkslateblue": number[];
			"darkslategray": number[];
			"darkslategrey": number[];
			"darkturquoise": number[];
			"darkviolet": number[];
			"deeppink": number[];
			"deepskyblue": number[];
			"dimgray": number[];
			"dimgrey": number[];
			"dodgerblue": number[];
			"firebrick": number[];
			"floralwhite": number[];
			"forestgreen": number[];
			"gainsboro": number[];
			"ghostwhite": number[];
			"gold": number[];
			"goldenrod": number[];
			"greenyellow": number[];
			"grey": number[];
			"honeydew": number[];
			"hotpink": number[];
			"indianred": number[];
			"indigo": number[];
			"ivory": number[];
			"khaki": number[];
			"lavender": number[];
			"lavenderblush": number[];
			"lawngreen": number[];
			"lemonchiffon": number[];
			"lightblue": number[];
			"lightcoral": number[];
			"lightcyan": number[];
			"lightgoldenrodyellow": number[];
			"lightgray": number[];
			"lightgreen": number[];
			"lightgrey": number[];
			"lightpink": number[];
			"lightsalmon": number[];
			"lightseagreen": number[];
			"lightskyblue": number[];
			"lightslategray": number[];
			"lightslategrey": number[];
			"lightsteelblue": number[];
			"lightyellow": number[];
			"limegreen": number[];
			"linen": number[];
			"magenta": number[];
			"mediumaquamarine": number[];
			"mediumblue": number[];
			"mediumorchid": number[];
			"mediumpurple": number[];
			"mediumseagreen": number[];
			"mediumslateblue": number[];
			"mediumspringgreen": number[];
			"mediumturquoise": number[];
			"mediumvioletred": number[];
			"midnightblue": number[];
			"mintcream": number[];
			"mistyrose": number[];
			"moccasin": number[];
			"navajowhite": number[];
			"oldlace": number[];
			"olivedrab": number[];
			"orange": number[];
			"orangered": number[];
			"orchid": number[];
			"palegoldenrod": number[];
			"palegreen": number[];
			"paleturquoise": number[];
			"palevioletred": number[];
			"papayawhip": number[];
			"peachpuff": number[];
			"peru": number[];
			"pink": number[];
			"plum": number[];
			"powderblue": number[];
			"rosybrown": number[];
			"royalblue": number[];
			"saddlebrown": number[];
			"salmon": number[];
			"sandybrown": number[];
			"seagreen": number[];
			"seashell": number[];
			"sienna": number[];
			"skyblue": number[];
			"slateblue": number[];
			"slategray": number[];
			"slategrey": number[];
			"snow": number[];
			"springgreen": number[];
			"steelblue": number[];
			"tan": number[];
			"thistle": number[];
			"tomato": number[];
			"turquoise": number[];
			"violet": number[];
			"wheat": number[];
			"whitesmoke": number[];
			"yellowgreen": number[];
		}
	}

	export = Color;
}

// dojo/_base/config

declare module "dojo/_base/config"
{
	export var addOnLoad: Object;	// TODO
	export var afterOnLoad: string;
	export var baseUrl: string;
	export var callback: Function;
	export var debugContainerId: string;
	export var debugHeight: number;
	export var defaultDuration: number;
	export var deferredInstrumentation: string;
	export var deps: string[];
	export var dojoBlankHtmlUrl: string;
	export var extraLocale:string[];
	export var ioPublish: boolean;
	export var isDebug: boolean;
	export var locale: string;
	export var modulePaths: { [path:string]: string; };
	export var parseOnLoad: boolean;
	export var require:string[];
	export var transparentColor:number[];
	export var urchin: string;
	export var useCustomLogger: boolean;
	export var useDeferredInstrumentation: Object;
}

// dojo/_base/declare

declare module Dojo
{
	export module Declare
	{
		export interface _DeclareOptions
		{
			constructor: Dojo.Action;
			destroy: Dojo.BlankFunction;
		}
	}
}

declare module "dojo/_base/declare"
{
	var declare: {
		(className: string, superclass: Function, props: Dojo.Declare._DeclareOptions): Function;
		(className: string, superclasses: Function[], props: Dojo.Declare._DeclareOptions): Function;
		(superclass: Function, props: Dojo.Declare._DeclareOptions): Function;
		(superclasses: Function[], props: Dojo.Declare._DeclareOptions): Function;

		safeMixin<T extends Object>(dest: T, source: Object): T;
	};

	export = declare;
}

// dojo/_base/fx

declare module Dojo
{
	export module Fx
	{
		export interface EasingFunction { (value: number): number; }

		export interface BaseCreateOptions
		{
			node: any;
			duration?: number;
			easing?: Dojo.Fx.EasingFunction;
		}
		export interface CreateOptions extends BaseCreateOptions
		{
			properties: { [style: string]: Object; };
		}
	}

	export class Animation extends Dojo.Evented
	{
		constructor(args?: Object);

		duration: number;
		curve: any;
		easing: Fx.EasingFunction;
		repeat: number;
		rate: number;
		delay: number;

		play(delay?: number, goToStart?: boolean): Animation;
		pause(): Dojo.Animation;
		gotoPercent(percent: number, andPlay?: boolean): Animation;
		stop(goToEnd?:boolean): Animation;
		status(): string;
	}
}

declare module "dojo/_base/fx"
{
	export class _Line
	{
	}

	export function anim(nodeId: string, properties: Object, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.BlankFunction, delay?: number): Dojo.Animation;
	export function anim(node: HTMLElement, properties: Object, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.BlankFunction, delay?: number): Dojo.Animation;

	export function animateProperty(args: Dojo.Fx.CreateOptions): Dojo.Animation;
	export function fadeIn(args: Dojo.Fx.BaseCreateOptions): Dojo.Animation;
	export function fadeOut(args: Dojo.Fx.BaseCreateOptions): Dojo.Animation;
}

// dojo/_base/lang

declare module "dojo/_base/lang"
{
	export function clone<T>(obj: T): T;
	export function delegate(obj: Object, props: { [name: string]: any; }): Object;
	export function exists(path: string, root?: Object): boolean;
	export function extend<T extends Object>(ctor: T, ...props: Object[]): T;
	export function getObject(path: string, create?: boolean): Object;

	export function hitch<F extends Function>(scope: Object, method: F): F;
	export function hitch(scope: Object, method: string): Function;

	export function mixin<T extends Object>(dest: T, ...sources: Object[]): T;

	export function partial<F extends Function>(method: F, ...v_args: any[]): F;
	export function partial(method: string, ...v_args: any[]): Function;

	export function replace(tmpl: string, map: Object, pattern?: string): string;
	export function replace(tmpl: string, map: string[], pattern?: string): string;
	export function replace(tmpl: string, map: (matched: string, key: string, offset: number, template: string) => string, pattern?: string): string;

	export function setObject(path: string, value: any, context?: Object): Object;
	export function trim(str: string): string;

	// NOTE: The following functions are deprecated
	export function isString(v: any): boolean;
	export function isArray(v: any): boolean;
	export function isFunction(v: any): boolean;
	export function isArrayLike(v: any): boolean;
	export function isObject(v: any): boolean;
}

// dojo/AdapterRegistry

declare module "dojo/AdapterRegistry"
{
	class DojoAdapterRegistry
	{
		constructor(returnWrappers?: boolean);

		pairs: any[];
		returnWrappers: boolean;

		match(...args: Object[]): void;
		register(name: string, check: Dojo.FunctionReturning<boolean>, wrap: Dojo.Action, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}

	export = DojoAdapterRegistry;
}

// dojo/aspect 

declare module "dojo/aspect"
{
	export function after(target: Object, methodName: string, advice: (x: any) => any): Dojo.RemovableHandle;
	export function after(target: Object, methodName: string, advice: Function, receiveArguments: boolean): Dojo.RemovableHandle;

	export function around(target: Object, methodName: string, advice: (fn: Function) => Function): Dojo.RemovableHandle;
	export function before(target: Object, methodName: string, advice: Dojo.FunctionReturning<any[]>): Dojo.RemovableHandle;
}

// dojo/back

declare module "dojo/back"
{
	export interface HistoryState
	{
		back?: (direction: string) => void;
		forward?: (direction: string) => void;
		changeUrl?: any;
	}
	
	export function init(): void;
	export function addToHistory(args: HistoryState): void;
	export function getHash(): any;
}

// dojo/cldr/monetary

declare module "dojo/cldr/monetary"
{
	export function getData(code: string): string;
}

// dojo/cldr/supplemental

declare module "dojo/cldr/supplemental"
{
	export function getFirstDayOfWeek(locale?: string): number;
	export function getWeekend(locale?: string): { start: number; end: number; };
}

// dojo/cookie

declare module Dojo
{
	export module Cookie
	{
		export interface _CookieOptions
		{
			expires?: any;
			path?: string;
			domain?: string;
			secure?: boolean;
		}
	}
}

declare module "dojo/cookie"
{
	var cookie: {
		(name: string): string;
		(name: string, value: string, props?: Dojo.Cookie._CookieOptions): void;

		isSupported(): boolean;
	};

	export = cookie;
}

// dojo/currency

declare module "dojo/currency"
{
	interface _FormatOptions
	{
		currency?: string;
		fractional?: boolean;
		locale?: string;
		pattern?: string;
		places?: number;
		round?: number;
		symbol?: string;
		type?: string;
		strict?: boolean;
	}
	
	export function format(value: number, options?:_FormatOptions): string;
	export function parse(expression: string, options?: _FormatOptions): number;
	export function regexp(options?: _FormatOptions): RegExp;
}

// dojo/date

declare module "dojo/date"
{
	export function add(date: Date, interval: string, amount: number): Date;
	export function compare(date1: Date, date2?: Date, portion?: string): number;
	export function difference(date1: Date, date2?: Date, interval?: string): number;
	export function getDaysInMonth(dateObject: Date): number;
	export function getTimezoneName(dateObject: Date): string;
	export function isLeapYear(dateObject: Date): boolean;
}

// dojo/date/stamp

declare module "dojo/date/stamp"
{
	export function fromISOString(formattedString: string, defaultTime?: number): Date;
	export function toISOString(dateObject: Date, options?: { selector?: string; zulu?: boolean; milliseconds?: number; }): string;
}

// dojo/date/locale

declare module "dojo/date/locale"
{
	interface _FormatOptions
	{
		selector?: string;
		formatLength?: string;
		datePattern?: string;
		timePattern?: string;
		am?: string;
		pm?: string;
		locale?: string;
		fullYear?: boolean;
		strict?: boolean;
	}

	export function addCustomFormats(packageName: string, bundleName: string): void;
	export function format(dateObject: Date, options?: _FormatOptions): string;
	export function getNames(item: string, type: string, context?: string, locale?: string): string[];
	export function isWeekend(dateObject?: Date, locale?: string): boolean;
	export function parse(value: string, options?: _FormatOptions): Date;
	export function regexp(options?: _FormatOptions): RegExp;
}

// dojo/Deferred

declare module Dojo
{
	export class Deferred<T>
	{
		constructor(canceler?: (reason: any) => void );

		promise: Dojo.Promise<T>;

		cancel(reason: any, strict?: boolean): any;
		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;
		progress(update: any, strict?: boolean): Dojo.Promise<T>;
		reject(reason: any, strict?: boolean): Dojo.Promise<T>;
		resolve(value: T, strict?: boolean): Dojo.Promise<T>;
		then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): Dojo.Promise<V>;
	}
}
declare module "dojo/Deferred"
{
	// TODO: TypeScript can export generic types yet
	var deferred: Dojo.Deferred<any>;
	export = deferred;
}

// dojo/dom

declare module "dojo/dom"
{
	export function byId(node: HTMLElement): HTMLElement;
	export function byId(id: string): HTMLElement;

	export function isDescendant(id: string, ancestor: string): boolean;
	export function isDescendant(node: HTMLElement, ancestor: string): boolean;
	export function isDescendant(id: string, ancestor: HTMLElement): boolean;
	export function isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean;

	export function setSelectable(id: string, selectable: boolean);
	export function setSelectable(node: HTMLElement, selectable: boolean);
}

// dojo/dom-attr

declare module "dojo/dom-attr"
{
	export function has(id: string, attr: string): boolean;
	export function has(node: HTMLElement, attr: string): boolean;

	export function get(id: string, attr: string): string;
	export function get(node: HTMLElement, attr: string): string;

	export function set(id: string, attr: string, value: string): void;
	export function set(node: HTMLElement, attr: string, value: string): void;
	export function set(id: string, values: { [attr: string]: string; }): void;
	export function set(node: HTMLElement, values: { [attr: string]: string; }): void;

	export function remove(id: string, attr: string): string;
	export function remove(node: HTMLElement, attr: string): string;

	export function getNodeProp(id: string, attr: string): any;
	export function getNodeProp(node: HTMLElement, attr: string): any;
}

// dojo/dom-class

declare module "dojo/dom-class"
{
	export function contains(node: string, className: string): boolean;
	export function contains(node: HTMLElement, className: string): boolean;

	export function add(node: string, classNames: string): void;
	export function add(node: string, classNames: string[]): void;
	export function add(node: HTMLElement, classNames: string): void;
	export function add(node: HTMLElement, classNames: string[]): void;

	export function remove(node: string): void;
	export function remove(node: string, classNames: string): void;
	export function remove(node: string, classNames: string[]): void;
	export function remove(node: HTMLElement): void;
	export function remove(node: HTMLElement, classNames: string): void;
	export function remove(node: HTMLElement, classNames: string[]): void;

	export function replace(node: string, addClassNames: string, removeClassNames: string): void;
	export function replace(node: string, addClassNames: string[], removeClassNames: string): void;
	export function replace(node: HTMLElement, addClassNames: string, removeClassNames: string): void;
	export function replace(node: HTMLElement, addClassNames: string[], removeClassNames: string): void;
	export function replace(node: string, addClassNames: string, removeClassNames: string[]): void;
	export function replace(node: string, addClassNames: string[], removeClassNames: string[]): void;
	export function replace(node: HTMLElement, addClassNames: string, removeClassNames: string[]): void;
	export function replace(node: HTMLElement, addClassNames: string[], removeClassNames: string[]): void;

	export function toggle(node: string, className: string, addRemove?: boolean): void;
	export function toggle(node: HTMLElement, className: string, addRemove?: boolean): void;
}

// dojo/dom-construct

declare module "dojo/dom-construct"
{
	export function toDom(frag: string, doc?: HTMLDocument): HTMLElement;

	export function place(id: string, refNodeId: string, pos?: string): HTMLElement;
	export function place(node: HTMLElement, refNodeId: string, pos?: string): HTMLElement;
	export function place(id: string, refNode: HTMLElement, pos?: string): HTMLElement;
	export function place(node: HTMLElement, refNode: HTMLElement, pos?: string): HTMLElement;
	export function place(id: string, refNodeId: string, pos?: number): HTMLElement;
	export function place(node: HTMLElement, refNodeId: string, pos?: number): HTMLElement;
	export function place(id: string, refNode: HTMLElement, pos?: number): HTMLElement;
	export function place(node: HTMLElement, refNode: HTMLElement, pos?: number): HTMLElement;

	export function create(id: string, attrs?: { [attr: string]: string; }, refNodeId?: string, pos?: string): HTMLElement;
	export function create(tag: HTMLElement, attrs?: { [attr: string]: string; }, refNodeId?: string, pos?: string): HTMLElement;
	export function create(id: string, attrs?: { [attr: string]: string; }, refNode?: HTMLElement, pos?: string): HTMLElement;
	export function create(tag: HTMLElement, attrs?: { [attr: string]: string; }, refNode?: HTMLElement, pos?: string): HTMLElement;

	export function empty(id: string): void;
	export function empty(node: HTMLElement): void;

	export function destroy(id: string): void;
	export function destroy(node: HTMLElement): void;
}

// dojo/dom-form

declare module "dojo/dom-form"
{
	export function fieldToObject(inputNode: HTMLElement): any;
	export function fieldToObject(inputNode: string): any;

	export function toJson(formNode: HTMLElement, prettyPrint?: boolean): string;
	export function toJson(formNode: string, prettyPrint?: boolean): string;

	export function toObject(formNode: HTMLElement): Object;
	export function toObject(formNode: string): Object;

	export function toQuery(formNode: HTMLElement): string;
	export function toQuery(formNode: string): string;
}

// dojo/dom-geometry

declare module Dojo
{
	export interface Point
	{
		x: number;
		y: number;
	}
	export interface SizeWidthHeight
	{
		w: number;
		h: number;
	}
	export interface BorderBox extends Point
	{
		w: number;
		h: number;
	}
	export interface PositionLeftTopWidthHeight extends SizeWidthHeight
	{
		l: number;
		t: number;
	}
	export interface PositionLeftTopRightBottomWidthHeight extends PositionLeftTopWidthHeight
	{
		r: number;
		b: number;
	}
}

declare module "dojo/dom-geometry"
{
	export var boxModel: string;

	export function docScroll(doc?: HTMLDocument): { node: HTMLElement; x: number; y: number; };
	export function fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number;
	export function getBorderExtents(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopRightBottomWidthHeight;
	export function getContentBox(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopWidthHeight;
	export function getIeDocumentElementOffset(doc?: HTMLDocument): Dojo.Point;
	export function getMarginBox(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopWidthHeight;
	export function getMarginExtents(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopWidthHeight;
	export function getMarginSize(node: HTMLElement, computedStyle?: Object): Dojo.SizeWidthHeight;
	export function getPadBorderExtents(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopRightBottomWidthHeight;
	export function getPadExtents(node: HTMLElement, computedStyle?: Object): Dojo.PositionLeftTopRightBottomWidthHeight;
	export function isBodyLtr(doc?: HTMLDocument): boolean;
	export function normalizeEvent(event: { pageX?: number; pageY?: number; offsetX?: number; offsetY?: number; layerX?: number; layerY?: number; }): void;

	export function position(node: HTMLElement, includeScroll?: boolean): Dojo.PositionLeftTopWidthHeight;
	export function position(node: string, includeScroll?: boolean): Dojo.PositionLeftTopWidthHeight;

	export function setContentSize(node: HTMLElement, box: Dojo.SizeWidthHeight, computedStyle?: Object): void;
	export function setMarginBox(node: HTMLElement, box: Dojo.SizeWidthHeight, computedStyle?: Object): void;
}

// dojo/dom-prop

declare module "dojo/dom-prop"
{
	export function get(id: string, attr: string): string;
	export function get(node: HTMLElement, attr: string): string;

	export function set(id: string, attr: string, value: string): void;
	export function set(node: HTMLElement, attr: string, value: string): void;
	export function set(id: string, values: { [attr: string]: string; }): void;
	export function set(node: HTMLElement, values: { [attr: string]: string; }): void;
}

// dojo/dom-style

declare module "dojo/dom-style"
{
	export function getComputedStyle(node: HTMLElement): Object;

	export function get(id: string, style?: string): { [style: string]: string; };
	export function get(node: HTMLElement, style?: string): { [style: string]: string; };

	export function set(id: string, style: string, value: string): void;
	export function set(node: HTMLElement, style: string, value: string): void;
	export function set(id: string, values: { [style: string]: string; }): void;
	export function set(node: HTMLElement, values: { [style: string]: string; }): void;
}

// dojo/Evented

declare module Dojo
{
	export class Evented
	{

		emit(type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		on(type: string, listener: (ev: Event) => boolean): Dojo.RemovableHandle;
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
		on(type: Dojo.ExtensionEvent, listener: EventListener): Dojo.RemovableHandle;
	}
}
declare module "dojo/Evented"
{
	var Evented: Dojo.Evented;
	export = Evented;
}

// dojo/fx

declare module Dojo
{
	export module Fx
	{
		export interface SlideCreateOptions extends CreateOptions
		{
			top: string;
			left: string;
		}
		export interface AutoSlideCreateOptions extends SlideCreateOptions
		{
			auto: any;
		}
	}
}

declare module "dojo/fx" 
	{
	export function chain(animations: Dojo.Animation[]): Dojo.Animation;
	export function combine(animations: Dojo.Animation[]): Dojo.Animation;
	export function slideTo(args: Dojo.Fx.SlideCreateOptions): Dojo.Animation;
	export var Toggler: new (args: Dojo.Fx.TogglerCreateOptions) => Dojo.Fx.Toggler;
	export function wipeIn(args: Dojo.Fx.CreateOptions): Dojo.Animation;
	export function wipeOut(args: Dojo.Fx.CreateOptions): Dojo.Animation;
}

// dojo/fx/easing

declare module "dojo/fx/easing"
{
	export function backIn(n: number): number;
	export function backInOut(n: number): number;
	export function backOut(n: number): number;
	export function bounceIn(n: number): number;
	export function bounceInOut(n: number): number;
	export function bounceOut(n: number): number;
	export function circIn(n: number): number;
	export function circInOut(n: number): number;
	export function circOut(n: number): number;
	export function cubicIn(n: number): number;
	export function cubicInOut(n: number): number;
	export function cubicOut(n: number): number;
	export function elasticIn(n: number): number;
	export function elasticInOut(n: number): number;
	export function elasticOut(n: number): number;
	export function expoIn(n: number): number;
	export function expoInOut(n: number): number;
	export function expoOut(n: number): number;
	export function linearIn(n: number): number;
	export function linearInOut(n: number): number;
	export function linearOut(n: number): number;
	export function quadIn(n: number): number;
	export function quadInOut(n: number): number;
	export function quadOut(n: number): number;
	export function quartIn(n: number): number;
	export function quartInOut(n: number): number;
	export function quartOut(n: number): number;
	export function quintIn(n: number): number;
	export function quintInOut(n: number): number;
	export function quintOut(n: number): number;
	export function sineIn(n: number): number;
	export function sineInOut(n: number): number;
	export function sineOut(n: number): number;
}

// dojo/fx/Toggler

declare module Dojo
{
	export module Fx
	{
		interface TogglerCreateOptions
		{
			node: any;
			showDuration?: number;
			showFunc?: (args: Dojo.Fx.BaseCreateOptions) => Dojo.Animation;
			hideDuration?: number;
			hideFuc?: (args: Dojo.Fx.BaseCreateOptions) => Dojo.Animation;
		}
	}
}

declare module "dojo/fx/Toggler"
{
	class Toggler
	{
		constructor(args: Dojo.Fx.TogglerCreateOptions);

		hideDuration: number;
		node: HTMLElement;
		showDuration: number;

		hide(delay?: number): Dojo.Animation;
		hideFunc(args?: { node: any; duration?: number; easing: Dojo.Fx.EasingFunction; }): Dojo.Animation;
		show(delay?: number): Dojo.Animation;
		showFunc(args?: { node: any; duration?: number; easing: Dojo.Fx.EasingFunction; }): Dojo.Animation;
	}
	export = Toggler;
}

// dojo/has

declare module Dojo
{
	export interface Has
	{
		(feature: string): boolean;
		(feature: number): boolean;

		add(feature: string, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		add(feature: number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		clearElement(element: Object): void;
		load<T>(id: string, parentRequire: Function, loaded: (m: T) => void ): void;
		normalize(id: number, toAbsMid: (id: number) => number): void;
	}
}
declare module "dojo/has"
{
	var has: Dojo.Has;
	export = has;
}

// dojo/hash

declare module "dojo/hash"
{
	function hash(hash?: string, replace?: boolean): string;

	export = hash;
}

// dojo/html

declare module "dojo/html"
{
	interface _ContentSetterOptions
	{
		cleanContent?: boolean;
		extractContent?: boolean;
		parseContent?: boolean;
		parserScope?: string;
		startup?: boolean;

		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
	}

	export class _ContentSetter
	{
		constructor(params: _ContentSetterOptions, node: string);
		constructor(params: _ContentSetterOptions, node: HTMLElement);

		node: HTMLElement;
		content: any;
		cleanContent: boolean;
		extractContent: boolean;
		parseContent: boolean;
		parserScope: string;
		startup: boolean;

		empty(): void;
		
		set(cont: string, params?: Object): void;
		set(cont: HTMLElement, params?: Object): void;
		set(cont: NodeList, params?: Object): void;
		set(cont: Dojo.NodeList, params?: Object): void;
		set(cont: HTMLElement[], params?: Object): void;

		setContent(): void;
		tearDown(): void;

		// Events
		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
		onExecError(err: any): string;
	}
	
	export function set(node: HTMLElement, content: string, params?: _ContentSetterOptions): void;
	export function set(node: HTMLElement, content: HTMLElement, params?: _ContentSetterOptions): void;
	export function set(node: HTMLElement, content: NodeList, params?: _ContentSetterOptions): void;
	export function set(node: HTMLElement, content: Dojo.NodeList, params?: _ContentSetterOptions): void;
	export function set(node: HTMLElement, content: HTMLElement[], params?: _ContentSetterOptions): void;
}

// dojo/io-query

declare module "dojo/io-query"
{
	export function objectToQuery(map: { [name: string]: any; }): string;
	export function queryToObject(str: string): { [name: string]: any; };
}

// dojo/keys

declare module "dojo/keys"
{
	export var BACKSPACE: number;
	export var TAB: number;
	export var CLEAR: number;
	export var ENTER: number;
	export var SHIFT: number;
	export var CTRL: number;
	export var ALT: number;
	export var META: number;
	export var PAUSE: number;
	export var CAPS_LOCK: number;
	export var ESCAPE: number;
	export var SPACE: number;
	export var PAGE_UP: number;
	export var PAGE_DOWN: number;
	export var END: number;
	export var HOME: number;
	export var LEFT_ARROW: number;
	export var UP_ARROW: number;
	export var RIGHT_ARROW: number;
	export var DOWN_ARROW: number;
	export var INSERT: number;
	export var DELETE: number;
	export var HELP: number;
	export var LEFT_WINDOW: number;
	export var RIGHT_WINDOW: number;
	export var SELECT: number;
	export var NUMPAD_0: number;
	export var NUMPAD_1: number;
	export var NUMPAD_2: number;
	export var NUMPAD_3: number;
	export var NUMPAD_4: number;
	export var NUMPAD_5: number;
	export var NUMPAD_6: number;
	export var NUMPAD_7: number;
	export var NUMPAD_8: number;
	export var NUMPAD_9: number;
	export var NUMPAD_MULTIPLY: number;
	export var NUMPAD_PLUS: number;
	export var NUMPAD_ENTER: number;
	export var NUMPAD_MINUS: number;
	export var NUMPAD_PERIOD: number;
	export var NUMPAD_DIVIDE: number;
	export var F1: number;
	export var F2: number;
	export var F3: number;
	export var F4: number;
	export var F5: number;
	export var F6: number;
	export var F7: number;
	export var F8: number;
	export var F9: number;
	export var F10: number;
	export var F11: number;
	export var F12: number;
	export var F13: number;
	export var F14: number;
	export var F15: number;
	export var NUM_LOCK: number;
	export var SCROLL_LOCK: number;
	export var copyKey: number;
}

// dojo/json

declare module "dojo/json"
{
	export function parse(str: string, secured?: boolean): any;

	export function stringify(obj: any, replacer?: any[], space?: boolean): string;
	export function stringify(obj: any, replacer?: (key: string, value: string) => any, space?: boolean): string;
}

// dojo/mouse

declare module "dojo/mouse"
{
	export var enter: Dojo.ExtensionEvent;
	export var leave: Dojo.ExtensionEvent;

	export function isLeft(event: MouseEvent): boolean;
	export function isMiddle(event: MouseEvent): boolean;
	export function isRight(event: MouseEvent): boolean;
}

// dojo/NodeList

declare module Dojo
{
	export module Fx
	{
		export interface AutoCreateOptions extends CreateOptions
		{
			auto: any;
		}
		export interface AutoBaseCreateOptions extends BaseCreateOptions
		{
			auto: any;
		}
	}

	export class NodeList
	{
		constructor(node: HTMLElement);
		constructor(nodes: HTMLElement[]);
		//constructor(nodes: NodeList);
		constructor(nodes: Dojo.NodeList);

		addClass(className: string): Dojo.NodeList;
		addClass(classNames: string[]): Dojo.NodeList;
		//addClassFx(cssClass, args);			// May require dojox.fx

		addContent(content: string, position?: string): Dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: string): Dojo.NodeList;
		addContent(content: HTMLElement, position?: string): Dojo.NodeList;
		addContent(content: HTMLElement[], position?: string): Dojo.NodeList;
		addContent(content: Dojo.NodeList, position?: string): Dojo.NodeList;
		//addContent(content: NodeList, position?: string): Dojo.NodeList;
		addContent(content: string, position?: number): Dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: number): Dojo.NodeList;
		addContent(content: HTMLElement, position?: number): Dojo.NodeList;
		addContent(content: HTMLElement[], position?: number): Dojo.NodeList;
		addContent(content: Dojo.NodeList, position?: number): Dojo.NodeList;
		//addContent(content: NodeList, position?: number): Dojo.NodeList;

		adopt(query: string, position?: string): Dojo.NodeList;
		adopt(node: HTMLElement, position?: string): Dojo.NodeList;
		adopt(list: HTMLElement[], position?: string): Dojo.NodeList;
		//adopt(list: NodeList, position?: string): Dojo.NodeList;
		adopt(list: Dojo.NodeList, position?: string): Dojo.NodeList;
		adopt(query: string, position?: number): Dojo.NodeList;
		adopt(node: HTMLElement, position?: number): Dojo.NodeList;
		adopt(list: HTMLElement[], position?: number): Dojo.NodeList;
		//adopt(list: NodeList, position?: number): Dojo.NodeList;
		adopt(list: Dojo.NodeList, position?: number): Dojo.NodeList;

		after(content: string): Dojo.NodeList;
		after(content: Object): Dojo.NodeList;
		after(content: HTMLElement): Dojo.NodeList;
		after(content: HTMLElement[]): Dojo.NodeList;
		after(content: Dojo.NodeList): Dojo.NodeList;
		//after(content: NodeList): Dojo.NodeList;

		andSelf(): Dojo.NodeList;
		anim(properties: { [property: string]: any; }, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.BlankFunction, delay?: number): Dojo.Animation;

		animateProperty(args: Dojo.Fx.CreateOptions): Dojo.Animation;
		animateProperty(args: Dojo.Fx.AutoCreateOptions): Dojo.NodeList;

		append(content: string): Dojo.NodeList;
		append(content: Object): Dojo.NodeList;
		append(content: HTMLElement): Dojo.NodeList;
		append(content: HTMLElement[]): Dojo.NodeList;
		append(content: Dojo.NodeList): Dojo.NodeList;
		//append(content: NodeList): Dojo.NodeList;

		appendTo(query: string): Dojo.NodeList;
		at(...index: number[]): Dojo.NodeList;

		attr(property: string): string[];
		attr(property: string, value: string): Dojo.NodeList;

		before(content: string): Dojo.NodeList;
		before(content: Object): Dojo.NodeList;
		before(content: HTMLElement): Dojo.NodeList;
		before(content: HTMLElement[]): Dojo.NodeList;
		before(content: Dojo.NodeList): Dojo.NodeList;
		//before(content: NodeList): Dojo.NodeList;

		children(query?: string): Dojo.NodeList;
		clone(): Dojo.NodeList;

		closest(query: string): HTMLElement;
		closest(query: string, rootId: string): HTMLElement;
		closest(query: string, root: Object): HTMLElement;

		concat(...items: HTMLElement[]): Dojo.NodeList;

		connect(methodName: string, funcName: string): Dojo.NodeList;
		connect(methodName: string, func: Function): Dojo.NodeList;
		connect(methodName: string, obj: Object, funcName: string): Dojo.NodeList;

		data(key: { [prop: string]: any; }): Dojo.NodeList;
		data(key: string): any;
		data(key: string, value: any): Dojo.NodeList;

		delegate(selector: string, eventName: string, listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "abort", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "afterprint", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "beforeprint", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "blur", listener: (ev: FocusEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "canplay", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "canplaythrough", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "change", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "click", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "contextmenu", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dblclick", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "drag", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dragend", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dragenter", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dragleave", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dragover", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "dragstart", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "drop", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "durationchange", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "emptied", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "ended", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "focus", listener: (ev: FocusEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "hashchange", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "input", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "keydown", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "keypress", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "keyup", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "load", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "loadeddata", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "loadedmetadata", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "loadstart", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "message", listener: (ev: MessageEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mousedown", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mousemove", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mouseout", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mouseover", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mouseup", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "offline", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "online", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "pause", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "play", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "playing", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "progress", listener: (ev: any) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "ratechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "readystatechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "reset", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "resize", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "scroll", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "seeked", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "seeking", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "select", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "stalled", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "storage", listener: (ev: StorageEvent) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "submit", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "suspend", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "timeupdate", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "unload", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "volumechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		delegate(selector: string, eventName: "waiting", listener: (ev: Event) => boolean): Dojo.NodeList;

		dtl(template: string, context?: Object): Dojo.NodeList;
		empty(): Dojo.NodeList;
		end(): Dojo.NodeList;
		even(): Dojo.NodeList;
		every(callback: (node: HTMLElement, index: number, list: Dojo.NodeList) => boolean, thisObject?: Object): boolean;

		fadeIn(args?: Dojo.Fx.AutoBaseCreateOptions): Dojo.NodeList;
		fadeIn(args?: Dojo.Fx.BaseCreateOptions): Dojo.Animation;

		fadeOut(args?: Dojo.Fx.AutoBaseCreateOptions): Dojo.NodeList;
		fadeOut(args?: Dojo.Fx.BaseCreateOptions): Dojo.Animation;

		filter(filter: string): Dojo.NodeList;
		filter(filter: (item: HTMLElement, index: number, list: Dojo.NodeList) => boolean): Dojo.NodeList;

		first(): Dojo.NodeList;
		forEach(callback: (item: HTMLElement, index: number, list: Dojo.NodeList) => void , thisObject?: Object): Dojo.NodeList;

		html(): string;
		html(content: string): Dojo.NodeList;
		html(content: HTMLElement): Dojo.NodeList;
		html(content: HTMLElement[]): Dojo.NodeList;
		//html(content: NodeList): Dojo.NodeList;
		html(content: Dojo.NodeList): Dojo.NodeList;

		indexOf(value: HTMLElement, fromIndex?: number): number;

		innerHTML(): string;
		innerHTML(content: string): Dojo.NodeList;
		innerHTML(content: HTMLElement): Dojo.NodeList;
		innerHTML(content: HTMLElement[]): Dojo.NodeList;
		//innerHTML(content: NodeList): Dojo.NodeList;
		innerHTML(content: Dojo.NodeList): Dojo.NodeList;

		insertAfter(query: string): Dojo.NodeList;
		insertBefore(query: string): Dojo.NodeList;
		instantiate(declaredClass: string, properties?: Object): Dojo.NodeList;
		last(): Dojo.NodeList;
		lastIndexOf(value: HTMLElement, fromIndex?: number): number;
		map(func: (item: HTMLElement, index: number, list: Dojo.NodeList) => HTMLElement, thisObject?: Object): Dojo.NodeList;
		marginBox(): Dojo.PositionLeftTopWidthHeight;
		next(query?: string): Dojo.NodeList;
		nextAll(query?: string): Dojo.NodeList;
		odd(): Dojo.NodeList;

		on(name: string, listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "abort", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		on(name: "afterprint", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "beforeprint", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): Dojo.NodeList;
		on(name: "blur", listener: (ev: FocusEvent) => boolean): Dojo.NodeList;
		on(name: "canplay", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "canplaythrough", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "change", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "click", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "contextmenu", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "dblclick", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "drag", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "dragend", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "dragenter", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "dragleave", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "dragover", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "dragstart", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "drop", listener: (ev: DragEvent) => boolean): Dojo.NodeList;
		on(name: "durationchange", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "emptied", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "ended", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "focus", listener: (ev: FocusEvent) => boolean): Dojo.NodeList;
		on(name: "hashchange", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "input", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "keydown", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		on(name: "keypress", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		on(name: "keyup", listener: (ev: KeyboardEvent) => boolean): Dojo.NodeList;
		on(name: "load", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "loadeddata", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "loadedmetadata", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "loadstart", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "message", listener: (ev: MessageEvent) => boolean): Dojo.NodeList;
		on(name: "mousedown", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "mousemove", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "mouseout", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "mouseover", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "mouseup", listener: (ev: MouseEvent) => boolean): Dojo.NodeList;
		on(name: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): Dojo.NodeList;
		on(name: "offline", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "online", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "pause", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "play", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "playing", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "progress", listener: (ev: any) => boolean): Dojo.NodeList;
		on(name: "ratechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "readystatechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "reset", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "resize", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		on(name: "scroll", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		on(name: "seeked", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "seeking", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "select", listener: (ev: UIEvent) => boolean): Dojo.NodeList;
		on(name: "stalled", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "storage", listener: (ev: StorageEvent) => boolean): Dojo.NodeList;
		on(name: "submit", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "suspend", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "timeupdate", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "unload", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "volumechange", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(name: "waiting", listener: (ev: Event) => boolean): Dojo.NodeList;
		on(type: Dojo.ExtensionEvent, listener: EventListener): Dojo.NodeList;

		orphan(filter?: string): Dojo.NodeList;
		parent(query?: string): Dojo.NodeList;
		parents(query?: string): Dojo.NodeList;

		place(query: string, position?: string): Dojo.NodeList;
		place(node: HTMLElement, position?: string): Dojo.NodeList;
		place(query: string, position?: number): Dojo.NodeList;
		place(node: HTMLElement, position?: number): Dojo.NodeList;

		position(): Dojo.BorderBox;

		prepend(content: string): Dojo.NodeList;
		prepend(content: Object): Dojo.NodeList;
		prepend(content: HTMLElement): Dojo.NodeList;
		prepend(content: HTMLElement[]): Dojo.NodeList;
		prepend(content: Dojo.NodeList): Dojo.NodeList;
		//prepend(content: NodeList): Dojo.NodeList;

		prependTo(query: string): Dojo.NodeList;
		prev(query?: string): Dojo.NodeList;
		prevAll(query?: string): Dojo.NodeList;
		query(query: string): Dojo.NodeList;
		remove(filter?: string): Dojo.NodeList;
		removeAttr(name: string): Dojo.NodeList;

		removeClass(className?: string): Dojo.NodeList;
		removeClass(classNames?: string[]): Dojo.NodeList;
		//removeClassFx(cssClass, args);			// May require dojox.fx
		removeData(key?: string): Dojo.NodeList;
		replaceAll(query: string): Dojo.NodeList;

		replaceClass(addClass: string, removeClass?: string): Dojo.NodeList;
		replaceClass(addClass: string, removeClasses?: string[]): Dojo.NodeList;
		replaceClass(addClasses: string[], removeClass?: string): Dojo.NodeList;
		replaceClass(addClasses: string[], removeClasses?: string[]): Dojo.NodeList;

		replaceWith(content: string): Dojo.NodeList;
		replaceWith(content: Object): Dojo.NodeList;
		replaceWith(content: HTMLElement): Dojo.NodeList;
		replaceWith(content: HTMLElement[]): Dojo.NodeList;
		replaceWith(content: Dojo.NodeList): Dojo.NodeList;
		//replaceWith(content: NodeList): Dojo.NodeList;

		siblings(query?: string): Dojo.NodeList;
		slice(begin: number, end?: number): Dojo.NodeList;

		slideTo(args: Dojo.Fx.SlideCreateOptions): Dojo.Animation;
		slideTo(args: Dojo.Fx.AutoSlideCreateOptions): Dojo.NodeList;

		some(callback: (node: HTMLElement, index: number, list: Dojo.NodeList) => boolean, thisObject?: Object): boolean;
		splice(index: number, howmany?: number, ...items: HTMLElement[]): Dojo.NodeList;

		style(property: string): string[];
		style(property: string, value: string): Dojo.NodeList;

		text(): string;
		text(value: string): Dojo.NodeList;

		toggleClass(className: string, condition?: boolean): Dojo.NodeList;
		//toggleClassFx(cssClass, force, args);			// May require dojox.fx

		val(): string;
		val(): string[];
		val(value: string): Dojo.NodeList;
		val(value: string[]): Dojo.NodeList;

		wipeIn(args: Dojo.Fx.CreateOptions): Dojo.Animation;
		wipeIn(args: Dojo.Fx.AutoCreateOptions): Dojo.NodeList;
		
		wipeOut(args: Dojo.Fx.CreateOptions): Dojo.Animation;
		wipeOut(args: Dojo.Fx.AutoCreateOptions): Dojo.NodeList;

		wrap(html: string): Dojo.NodeList;
		wrap(node: HTMLElement): Dojo.NodeList;

		wrapAll(html: string): Dojo.NodeList;
		wrapAll(node: HTMLElement): Dojo.NodeList;

		wrapInner(html: string): Dojo.NodeList;
		wrapInner(node: HTMLElement): Dojo.NodeList;
	}
}
declare module "dojo/NodeList"
{
	var NodeList: Dojo.NodeList;
	export = NodeList;
}

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	var NodeList: Dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-dom" { 
	var NodeList: Dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-fx" {
	var NodeList: Dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-html" {
	var NodeList: Dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-manipulate" {
	var NodeList: Dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-traverse" {
	var NodeList: Dojo.NodeList;
	export = NodeList;
}

// dojo/number

declare module "dojo/number"
{
	export function format(value: string, options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		round?: number;
		fractional?: boolean;
		places?: number;
	}): string;
	export function parse(expression: string, options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		strict?: boolean;
		fractional?: boolean;
	}): number;
	export function regexp(options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		strict?: boolean;
		places?: number;
	}): RegExp;
	export function round(value: number, places?: number, increment?: number): number;
}

// dojo/on

declare module "dojo/on"
{
	var on:
	{
		(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
		(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
		(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;

		emit(target: Object, type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(target: Object, type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		selector(cssSelector: string, event: string, children?: boolean): Dojo.ExtensionEvent;
		selector(cssSelector: string, event: Dojo.ExtensionEvent, children?: boolean): Dojo.ExtensionEvent;

		pausable(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		pausable(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		pausable(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;

		once(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		once(target: Object, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
		once(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
	};

	export = on;
}

// dojo/parser

declare module "dojo/parser" 
{
	interface _ParseOptions
	{
		noStart?: boolean;
		rootNode?: HTMLElement;
		template?: boolean;
		inherited?: Object;
		scope?: string;
		propsThis?: Object;
		contextRequire?: Function;
	}

	export function parse(rootNode?: HTMLElement, options?: _ParseOptions): Dijit._Widget[];
	export function scan(root?: HTMLElement, options?: _ParseOptions): Dojo.Promise<HTMLElement[]>;
	export function instantiate(nodes: HTMLElement[], mixin?: Object, options?: _ParseOptions): Dijit._Widget[];
	export function construct(ctor: { (params?: Dijit.WidgetCreateOptions): Dijit._Widget; }, node: HTMLElement, mixin?: Object, options?: _ParseOptions, scripts?: HTMLElement[], inherited?: Object): Dijit._Widget;
}

// dojo/promise/Promise

declare module Dojo
{
	export class Promise<T>
	{
		constructor();

		always(callbackOrErrback?: (value: any) => void ): Dojo.Promise<T>;
		cancel(reason: any, strict?: boolean): any;
		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;
		otherwise(errback?: (error: any) => void ): Dojo.Promise<T>;
		then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): Dojo.Promise<V>;
		trace(): Dojo.Promise<T>;
		traceRejected(): Dojo.Promise<T>;
	}
}
declare module "dojo/promise/Promise" 
{
	// TODO: TypeScript can export generic types yet
	var promise: Dojo.Promise<any>;
	export = promise;
}

// dojo/promise/all

declare module "dojo/promise/all" 
{
	function all<T>(promises: Dojo.Promise<T>[]): Dojo.Promise<T[]>;
	function all<T>(promises: { [name: string]: Dojo.Promise<T>; }): Dojo.Promise<{ [name: string]: T; }>;
	function all<T>(promises: any): Dojo.Promise<T>;

	export = all;
}

// dojo/promise/first

declare module "dojo/promise/first" 
{
	function first<T>(promises: Dojo.Promise<T>[]): Dojo.Promise<T>;
	function first<T>(promises: { [name: string]: Dojo.Promise<T>; }): Dojo.Promise<T>;
	function first<T>(promises: any): Dojo.Promise<T>;

	export = first;
}

// dojo/query

declare module Dojo
{
	export interface QueryEngine
	{
		(selector: string, contextId?: string): Dojo.NodeList;
		(selector: string, context?: Object): Dojo.NodeList;

		NodeList: Dojo.NodeList;
	}
}
declare module "dojo/query"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css2"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!lite"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css2.1"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css3"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!acme"
{
	var query: Dojo.QueryEngine;
	export = query;
}

// dojo/regexp

declare module "dojo/regexp"
{
	export function buildGroupRE(arr: any, re: (item: any) => RegExp, nonCapture?: boolean): RegExp;
	export function buildGroupRE(arr: any[], re: (item: any) => RegExp, nonCapture?: boolean): RegExp;

	export function escapeString(str: string, except?: string): string;
	export function group(expression: string, nonCapture?: boolean): string;
}

// dojo/request

declare module Dojo
{
	export module Request
	{
		export interface _MethodOptions
		{
			method: string;
		}
		export interface _BaseOptions
		{
			handleAs?: string;
			data?: Object;
			query?: Object;
			timeout?: number;
			preventCache?: boolean;
		}
		export interface _Options extends _BaseOptions //implements _MethodOptions
		{
			method: string;
		}

		export interface RequestObject
		{
			(url: string, options?: Dojo.Request._Options): Dojo.Promise<any>;

			get(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
			put? (url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
			post? (url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
			del? (url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		}

		export module iFrame
		{
			export interface _BaseOptions extends Dojo.Request._BaseOptions
			{
				form?: HTMLElement;
			}
			export interface _Options extends _BaseOptions //implements _MethodOptions
			{
				method: string;
			}
		}

		export module Node
		{
			export interface _BaseOptions extends Dojo.Request._BaseOptions
			{
				headers?: Object;
				user: string;
				password: string;
			}
			export interface _Options extends _BaseOptions //implements _MethodOptions
			{
				method: string;
			}
		}

		export module Script
		{
			export interface _BaseOptions extends Dojo.Request._BaseOptions
			{
				frameDoc?: HTMLDocument;
				jsonp?: string;
				checkString?: string;
			}
			export interface _Options extends _BaseOptions //implements _MethodOptions
			{
				method: string;
			}
		}
	}
}

declare module "dojo/request"
{
	var request: Dojo.Request.RequestObject;
	export = request;
}
declare module "dojo/request/xhr"
{
	var request: {
		(url: string, options?: Dojo.Request._Options): Dojo.Promise<any>;

		get(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		put(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		post(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		del(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
	};
	export = request;
}
declare module "dojo/request/node"
{
	var request: {
		(url: string, options?: Dojo.Request.Node._Options): Dojo.Promise<any>;

		get(url: string, options?: Dojo.Request.Node._BaseOptions): Dojo.Promise<any>;
		put(url: string, options?: Dojo.Request.Node._BaseOptions): Dojo.Promise<any>;
		post(url: string, options?: Dojo.Request.Node._BaseOptions): Dojo.Promise<any>;
		del(url: string, options?: Dojo.Request.Node._BaseOptions): Dojo.Promise<any>;
	};
	export = request;
}
declare module "dojo/request/iframe" 
{
	var request: {
		(url: string, options?: Dojo.Request.iFrame._Options): Dojo.Promise<any>;

		get(url: string, options?: Dojo.Request.iFrame._BaseOptions): Dojo.Promise<any>;
		post(url: string, options?: Dojo.Request.iFrame._BaseOptions): Dojo.Promise<any>;
	}
	export = request;
}
declare module "dojo/request/script"
{
	var request: {
		(url: string, options?: Dojo.Request.Script._Options): Dojo.Promise<any>;

		get(url: string, options?: Dojo.Request.Script._BaseOptions): Dojo.Promise<any>;
	}
	export = request;
}

declare module "dojo/request/handlers"
{
	export function register(name: string, handler: (response: any) => any): void;
}

declare module "dojo/request/notify"
{
	function notify(type?: string, listener?: Dojo.Action): Dojo.RemovableHandle;
	function notify(type?: "start", listener?: Dojo.BlankFunction): Dojo.RemovableHandle;
	function notify(type?: "send", listener?: (response: any, cancel: () => void) => void): Dojo.RemovableHandle;
	function notify(type?: "load", listener?: (response: any) => void): Dojo.RemovableHandle;
	function notify(type?: "error", listener?: (error: any) => void): Dojo.RemovableHandle;
	function notify(type?: "done", listener?: (responseOrError: any) => void): Dojo.RemovableHandle;
	function notify(type?: "stop", listener?: Dojo.BlankFunction): Dojo.RemovableHandle;

	export = notify;
}

declare module "dojo/request/registry"
{
	var registry: {
		(url: string, options?: Dojo.Request._Options): Dojo.Promise<any>;

		get(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		put(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		post(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;
		del(url: string, options?: Dojo.Request._BaseOptions): Dojo.Promise<any>;

		register(url: string, provider: Dojo.Request.RequestObject, first?: boolean): Dojo.RemovableHandle;
		register(url: RegExp, provider: Dojo.Request.RequestObject, first?: boolean): Dojo.RemovableHandle;
		register(url: (url: string, options: Dojo.Request._Options) => boolean, provider: Dojo.Request.RequestObject, first?: boolean): Dojo.RemovableHandle;
	};
	export = registry;
}

// dojo/router

declare module Dojo
{
	export interface RouterEvent
	{
		params: { [name: string]: string; };
		oldPath: string;
		newPath: string;
		preventDefault: Dojo.BlankFunction;
		stopImmediatePropagation: Dojo.BlankFunction;
	}
}
declare module "dojo/router"
{
	export function register(route: string, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;
	export function register(route: RegExp, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;

	export function registerBefore(route: string, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;
	export function registerBefore(route: RegExp, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;

	export function startup(defaultPath?: string): void;
	export function destroy(): void;
	export function go(path: string, replace?: boolean): boolean;
}

// dojo/sniff

declare module "dojo/sniff"
{
	var sniff: Dojo.Has;
	export = sniff;
}

// dojo/topic

declare module "dojo/topic" 
{
	export function subscribe(topic: string, listener: Dojo.Action): Dojo.RemovableHandle;
	export function publish(topic: string, ...v_args: any[]): void;
}

// dojo/Stateful

declare module Dojo
{
	export class Stateful
	{
		get (name: string): any;
		set (name: string, value: any): void;
		set (values: { [prop: string]: any; }): void;
		watch(name: string, callback: (prop: string, oldvalue: any, newvalue: any) => void ): { unwatch: () => void; };
	}
}
declare module "dojo/Stateful"
{
	var Stateful: Dojo.Stateful;
	export = Stateful;
}

// dojo/string

declare module "dojo/string"
{
	export function pad(text: string, size: number, ch?: string, end?: boolean): string;
	export function rep(str: string, num: number): string;

	export function substitute(template: string, map: { [text: string]: string; }, transform?: (value: any, key: string) => string, thisObject?: Object): string;
	export function substitute(template: string, map: string[], transform?: (value: any, key: string) => string, thisObject?: Object): string;

	export function trim(str: string): string;
}

// dojo/touch

declare module "dojo/touch"
{
	export function cancel(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function enter(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function leave(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function move(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function out(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function over(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function press(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	export function release(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
}

// dojo/uacss

declare module "dojo/uacss"
{
	var uacss: Dojo.Has;
	export = uacss;
}

// dojo/when

declare module "dojo/when"
{
	function when<T>(value: T): Dojo.Promise<T>;
	function when<T, V>(value: T, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): V;
	function when<T>(promise: Dojo.Promise<T>): Dojo.Promise<T>;
	function when<T, V>(promise: Dojo.Promise<T>, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): Dojo.Promise<V>;

	export = when;
}

// dojo/window

declare module "dojo/window"
{
	export function get(doc: HTMLDocument): Window;
	export function getBox(doc: HTMLDocument): Dojo.PositionLeftTopWidthHeight;
	export function scrollIntoView(node: HTMLElement, pos?:Object): void;
}

// Widgets

declare module Dijit
{
	export interface WidgetCreateOptions
	{
		baseClass?: string;
		class?: string;
		containerNode?: HTMLElement;
		dir?: string;
		domNode?: HTMLElement;
		focused?: boolean;
		id?: string;
		lang?: string;
		ownerDocument?: HTMLDocument;
		postMixInProperties?: string;
		srcNodeRef?: HTMLElement;
		style?: { [style: string]: string; };
		title?: string;
		tooltip?: string;
	}

	export class _Widget extends Dojo.Stateful
	{
		constructor(params?: Dijit.WidgetCreateOptions, srcNodeRef?: HTMLElement);
		constructor(params?: Dijit.WidgetCreateOptions, srcNodeRefId?: string);
	}
}
