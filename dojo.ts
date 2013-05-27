/************************************************************************/
/* Define core Dojo features                                            */
/************************************************************************/

/// <reference path="dojo_types.ts"/>

// dojo/ready

declare module "dojo/ready"
{
	function ready(priority: number, context: Object, callback: GenericBlankFunction): void;
	function ready(context: Object, callback: GenericBlankFunction): void;
	function ready(callback: GenericBlankFunction): void;

	export = ready;
}

// dojo/domReady

declare module "dojo/domReady"
{
	function domReady(callback: GenericBlankFunction): void;

	export = domReady;
}

// dojo/_base/array

declare module "dojo/_base/array"
{
	export function indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
	export function lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

	export function forEach<T>(array: T[], callback: ArrayLoopCallback<T>, context?: Object): void;
	export function forEach<T>(array: T[], callback: string, context?: Object): void;
	export function forEach<T>(array: string, callback: ArrayLoopCallback<T>, context?: Object): void;
	export function forEach<T>(array: string, callback: string, context?: Object): void;

	export function filter<T>(array: T[], callback: ArrayPredicateCallback<T>, context?: Object): void;
	export function filter<T>(array: T[], callback: string, context?: Object): void;
	export function filter<T>(array: T[], callback: T, context?: Object): void;

	export function map<T, V>(array: T[], callback: ArrayTransformCallback<T, V>, context?: Object): V[];
	export function map<T, V>(array: T[], callback: string, context?: Object): V[];
	export function map<string, V>(array: string, callback: ArrayTransformCallback<string, V>, context?: Object): V[];
	export function map<string, V>(array: string, callback: string, context?: Object): V[];

	export function some<T>(array: T[], callback: ArrayPredicateCallback<T>, context?: Object): boolean;
	export function some<T>(array: T[], callback: string, context?: Object): boolean;
	export function some<T>(array: string, callback: ArrayPredicateCallback<T>, context?: Object): boolean;
	export function some<T>(array: string, callback: string, context?: Object): boolean;

	export function every<T>(array: T[], callback: ArrayPredicateCallback<T>, context?: Object): boolean;
	export function every<T>(array: T[], callback: string, context?: Object): boolean;
	export function every<T>(array: string, callback: ArrayPredicateCallback<T>, context?: Object): boolean;
	export function every<T>(array: string, callback: string, context?: Object): boolean;
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
	export var callback: GenericFunction;
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

declare module "dojo/_base/declare"
{
	interface _DeclareOptions
	{
		constructor: GenericAction;
		destroy: GenericBlankFunction;
	}

	var declare: {
		(className: string, superclass: Function, props: _DeclareOptions): Function;
		(className: string, superclasses: Function[], props: _DeclareOptions): Function;
		(superclass: Function, props: _DeclareOptions): Function;
		(superclasses: Function[], props: _DeclareOptions): Function;

		safeMixin<T extends Object>(dest: T, source: Object): T;
	};

	export = declare;
}

// dojo/_base/fx

interface DojoEasingFunction { (value: number): number; }

interface DojoAnimationBaseCreateOptions
{
	node: any;
	duration?: number;
	easing?: DojoEasingFunction;
}
interface _DojoAnimationCreateOptions extends DojoAnimationBaseCreateOptions
{
	properties: { [style: string]: Object; };
}

declare class DojoAnimation extends DojoEvented
{
	constructor(args?: Object);

	duration: number;
	curve: any;
	easing: DojoEasingFunction;
	repeat: number;
	rate: number;
	delay: number;

	play(delay?: number, goToStart?: boolean): DojoAnimation;
	pause(): DojoAnimation;
	gotoPercent(percent: number, andPlay?: boolean): DojoAnimation;
	stop(goToEnd?:boolean): DojoAnimation;
	status(): string;
}

declare module "dojo/_base/fx"
{
	export class _Line
	{
	}

	export function anim(nodeId: string, properties: Object, duration?: number, easing?: DojoEasingFunction, onEnd?: GenericBlankFunction, delay?: number): DojoAnimation;
	export function anim(node: HTMLElement, properties: Object, duration?: number, easing?: DojoEasingFunction, onEnd?: GenericBlankFunction, delay?: number): DojoAnimation;

	export function animateProperty(args: _DojoAnimationCreateOptions): DojoAnimation;
	export function fadeIn(args: DojoAnimationBaseCreateOptions): DojoAnimation;
	export function fadeOut(args: DojoAnimationBaseCreateOptions): DojoAnimation;
}

// dojo/_base/lang

declare module "dojo/_base/lang"
{
	export function clone<T>(obj: T): T;
	export function delegate(obj: Object, props: { [name: string]: any; }): Object;
	export function exists(path: string, root?: Object): boolean;
	export function extend<T extends Object>(ctor: T, ...props: Object[]): T;
	export function getObject(path: string, create?: boolean): Object;

	export function hitch<F extends GenericFunction>(scope: Object, method: F): F;
	export function hitch(scope: Object, method: string): GenericFunction;

	export function mixin<T extends Object>(dest: T, ...sources: Object[]): T;

	export function partial<F extends GenericFunction>(method: F, ...v_args: any[]): F;
	export function partial(method: string, ...v_args: any[]): GenericFunction;

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
		register(name: string, check: GenericFunctionReturning<boolean>, wrap: GenericAction, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}

	export = DojoAdapterRegistry;
}

// dojo/aspect 

declare module "dojo/aspect"
{
	export function after(target: Object, methodName: string, advice: (x: any) => any, receiveArguments?: boolean): DojoHandle;
	export function around(target: Object, methodName: string, advice: (fn: Function) => GenericFunction): DojoHandle;
	export function before(target: Object, methodName: string, advice: GenericFunctionReturning<any[]>): DojoHandle;
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

declare module "dojo/cookie"
{
	interface _CookieOptions
	{
		expires?: any;
		path?: string;
		domain?: string;
		secure?: boolean;
	}

	var cookie: {
		(name: string): string;
		(name: string, value: string, props?: _CookieOptions): void;

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

declare class DojoDeferred<T>
{
	constructor(canceler?: (reason: any) => void );

	promise: DojoPromise<T>;

	cancel(reason: any, strict?: boolean): any;
	isCanceled(): boolean;
	isFulfilled(): boolean;
	isRejected(): boolean;
	isResolved(): boolean;
	progress(update: any, strict?: boolean): DojoPromise<T>;
	reject(reason: any, strict?: boolean): DojoPromise<T>;
	resolve(value: T, strict?: boolean): DojoPromise<T>;
	then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): DojoPromise<V>;
}
declare module "dojo/Deferred"
{
	export = DojoDeferred;
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

interface DojoPoint
{
	x: number;
	y: number;
}
interface DojoSizeWidthHeight
{
	w: number;
	h: number;
}
interface DojoBorderBox extends DojoPoint
{
	w: number;
	h: number;
}
interface DojoPositionLeftTopWidthHeight extends DojoSizeWidthHeight
{
	l: number;
	t: number;
}
interface DojoPositionLeftTopRightBottomWidthHeight extends DojoPositionLeftTopWidthHeight
{
	r: number;
	b: number;
}

declare module "dojo/dom-geometry"
{
	export var boxModel: string;

	export function docScroll(doc?: HTMLDocument): { node: HTMLElement; x: number; y: number; };
	export function fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number;
	export function getBorderExtents(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopRightBottomWidthHeight;
	export function getContentBox(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopWidthHeight;
	export function getIeDocumentElementOffset(doc?: HTMLDocument): DojoPoint;
	export function getMarginBox(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopWidthHeight;
	export function getMarginExtents(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopWidthHeight;
	export function getMarginSize(node: HTMLElement, computedStyle?: Object): DojoSizeWidthHeight;
	export function getPadBorderExtents(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopRightBottomWidthHeight;
	export function getPadExtents(node: HTMLElement, computedStyle?: Object): DojoPositionLeftTopRightBottomWidthHeight;
	export function isBodyLtr(doc?: HTMLDocument): boolean;
	export function normalizeEvent(event: { pageX?: number; pageY?: number; offsetX?: number; offsetY?: number; layerX?: number; layerY?: number; }): void;

	export function position(node: HTMLElement, includeScroll?: boolean): DojoPositionLeftTopWidthHeight;
	export function position(node: string, includeScroll?: boolean): DojoPositionLeftTopWidthHeight;

	export function setContentSize(node: HTMLElement, box: DojoSizeWidthHeight, computedStyle?: Object): void;
	export function setMarginBox(node: HTMLElement, box: DojoSizeWidthHeight, computedStyle?: Object): void;
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

declare class DojoEvented
{
	emit(type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
	emit(type: DojoExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;
	on(type: string, listener: EventListener): DojoHandle;
	on(type: DojoExtensionEvent, listener: EventListener): DojoHandle;
}
declare module "dojo/Evented"
{
	export = DojoEvented;
}

// dojo/fx

interface _DojoSlideAnimationCreateOptions extends _DojoAnimationCreateOptions
{
	top: string;
	left: string;
}
interface DojoAutoSlideAnimationCreateOptions extends _DojoSlideAnimationCreateOptions
{
	auto: any;
}
declare module "dojo/fx"
{
	export function chain(animations: DojoAnimation[]): DojoAnimation;
	export function combine(animations: DojoAnimation[]): DojoAnimation;
	export function slideTo(args: _DojoSlideAnimationCreateOptions): DojoAnimation;
	export var Toggler: new (args: _DojoFxTogglerCreateOptions) => DojoFxToggler;
	export function wipeIn(args: _DojoAnimationCreateOptions): DojoAnimation;
	export function wipeOut(args: _DojoAnimationCreateOptions): DojoAnimation;
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

interface _DojoFxTogglerCreateOptions
{
	node: any;
	showDuration?: number;
	showFunc?: (args: DojoAnimationBaseCreateOptions) => DojoAnimation;
	hideDuration?: number;
	hideFuc?: (args: DojoAnimationBaseCreateOptions) => DojoAnimation;
}
declare module "dojo/fx/Toggler"
{
	class Toggler
	{
		constructor(args: _DojoFxTogglerCreateOptions);

		hideDuration: number;
		node: HTMLElement;
		showDuration: number;

		hide(delay?: number): DojoAnimation;
		hideFunc(args?: { node: any; duration?: number; easing: DojoEasingFunction; }): DojoAnimation;
		show(delay?: number): DojoAnimation;
		showFunc(args?: { node: any; duration?: number; easing: DojoEasingFunction; }): DojoAnimation;
	}
	export = Toggler;
}

// dojo/has

interface _DojoHas
{
	(feature: string): boolean;
	(feature: number): boolean;

	add(feature: string, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
	add(feature: number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
	clearElement(element: Object): void;
	load<T>(id: string, parentRequire: Function, loaded: (m: T) => void ): void;
	normalize(id: number, toAbsMid: (id: number) => number): void;
}
declare module "dojo/has"
{
	export = _DojoHas;
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
		set(cont: DojoNodeList, params?: Object): void;
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
	export function set(node: HTMLElement, content: DojoNodeList, params?: _ContentSetterOptions): void;
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
	export var enter: DojoExtensionEvent;
	export var leave: DojoExtensionEvent;

	export function isLeft(event: MouseEvent): boolean;
	export function isMiddle(event: MouseEvent): boolean;
	export function isRight(event: MouseEvent): boolean;
}

// dojo/NodeList

interface DojoAutoAnimationCreateOptions extends _DojoAnimationCreateOptions
{
	auto: any;
}
interface DojoAutoAnimationBaseCreateOptions extends DojoAnimationBaseCreateOptions
{
	auto: any;
}
declare class DojoNodeList
{
	constructor(node: HTMLElement);
	constructor(nodes: HTMLElement[]);
	constructor(nodes: NodeList);
	constructor(nodes: DojoNodeList);

	addClass(className: string): DojoNodeList;
	addClass(classNames: string[]): DojoNodeList;
	//addClassFx(cssClass, args);			// May require dojox.fx

	addContent(content: string, position?: string): DojoNodeList;
	addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: string): DojoNodeList;
	addContent(content: HTMLElement, position?: string): DojoNodeList;
	addContent(content: HTMLElement[], position?: string): DojoNodeList;
	addContent(content: DojoNodeList, position?: string): DojoNodeList;
	addContent(content: NodeList, position?: string): DojoNodeList;
	addContent(content: string, position?: number): DojoNodeList;
	addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: number): DojoNodeList;
	addContent(content: HTMLElement, position?: number): DojoNodeList;
	addContent(content: HTMLElement[], position?: number): DojoNodeList;
	addContent(content: DojoNodeList, position?: number): DojoNodeList;
	addContent(content: NodeList, position?: number): DojoNodeList;

	adopt(query: string, position?: string): DojoNodeList;
	adopt(node: HTMLElement, position?: string): DojoNodeList;
	adopt(list: HTMLElement[], position?: string): DojoNodeList;
	adopt(list: NodeList, position?: string): DojoNodeList;
	adopt(list: DojoNodeList, position?: string): DojoNodeList;
	adopt(query: string, position?: number): DojoNodeList;
	adopt(node: HTMLElement, position?: number): DojoNodeList;
	adopt(list: HTMLElement[], position?: number): DojoNodeList;
	adopt(list: NodeList, position?: number): DojoNodeList;
	adopt(list: DojoNodeList, position?: number): DojoNodeList;

	after(content: string): DojoNodeList;
	after(content: Object): DojoNodeList;
	after(content: HTMLElement): DojoNodeList;
	after(content: HTMLElement[]): DojoNodeList;
	after(content: DojoNodeList): DojoNodeList;
	after(content: NodeList): DojoNodeList;

	andSelf(): DojoNodeList;
	anim(properties: { [property: string]: any; }, duration?: number, easing?: DojoEasingFunction, onEnd?: GenericBlankFunction, delay?: number): DojoAnimation;

	animateProperty(args: _DojoAnimationCreateOptions): DojoAnimation;
	animateProperty(args: DojoAutoAnimationCreateOptions): DojoNodeList;

	append(content: string): DojoNodeList;
	append(content: Object): DojoNodeList;
	append(content: HTMLElement): DojoNodeList;
	append(content: HTMLElement[]): DojoNodeList;
	append(content: DojoNodeList): DojoNodeList;
	append(content: NodeList): DojoNodeList;

	appendTo(query: string): DojoNodeList;
	at(...index: number[]): DojoNodeList;

	attr(property: string): string[];
	attr(property: string, value: string): DojoNodeList;

	before(content: string): DojoNodeList;
	before(content: Object): DojoNodeList;
	before(content: HTMLElement): DojoNodeList;
	before(content: HTMLElement[]): DojoNodeList;
	before(content: DojoNodeList): DojoNodeList;
	before(content: NodeList): DojoNodeList;

	children(query?: string): DojoNodeList;
	clone(): DojoNodeList;

	closest(query: string): HTMLElement;
	closest(query: string, rootId: string): HTMLElement;
	closest(query: string, root: Object): HTMLElement;

	concat(...items: HTMLElement[]): DojoNodeList;

	connect(methodName: string, funcName: string): DojoNodeList;
	connect(methodName: string, func: GenericFunction): DojoNodeList;
	connect(methodName: string, obj: Object, funcName: string): DojoNodeList;

	data(key: { [prop: string]: any; }): DojoNodeList;
	data(key: string): any;
	data(key: string, value: any): DojoNodeList;

	delegate(selector: string, eventName: string, listener: EventListener): DojoNodeList;
	dtl(template: string, context?: Object): DojoNodeList;
	empty(): DojoNodeList;
	end(): DojoNodeList;
	even(): DojoNodeList;
	every(callback: (node: HTMLElement, index: number, list: DojoNodeList) => boolean, thisObject?: Object): boolean;

	fadeIn(args?: DojoAutoAnimationBaseCreateOptions): DojoNodeList;
	fadeIn(args?: DojoAnimationBaseCreateOptions): DojoAnimation;

	fadeOut(args?: DojoAutoAnimationBaseCreateOptions): DojoNodeList;
	fadeOut(args?: DojoAnimationBaseCreateOptions): DojoAnimation;

	filter(filter: string): DojoNodeList;
	filter(filter: (item: HTMLElement, index: number, list: DojoNodeList) => boolean): DojoNodeList;

	first(): DojoNodeList;
	forEach(callback: (item: HTMLElement, index: number, list: DojoNodeList) => void , thisObject?: Object): DojoNodeList;

	html(): string;
	html(content: string): DojoNodeList;
	html(content: HTMLElement): DojoNodeList;
	html(content: HTMLElement[]): DojoNodeList;
	html(content: NodeList): DojoNodeList;
	html(content: DojoNodeList): DojoNodeList;

	indexOf(value: HTMLElement, fromIndex?: number): number;

	innerHTML(): string;
	innerHTML(content: string): DojoNodeList;
	innerHTML(content: HTMLElement): DojoNodeList;
	innerHTML(content: HTMLElement[]): DojoNodeList;
	innerHTML(content: NodeList): DojoNodeList;
	innerHTML(content: DojoNodeList): DojoNodeList;

	insertAfter(query: string): DojoNodeList;
	insertBefore(query: string): DojoNodeList;
	instantiate(declaredClass: string, properties?: Object): DojoNodeList;
	last(): DojoNodeList;
	lastIndexOf(value: HTMLElement, fromIndex?: number): number;
	map(func: (item: HTMLElement, index: number, list: DojoNodeList) => HTMLElement, thisObject?: Object): DojoNodeList;
	marginBox(): DojoPositionLeftTopWidthHeight;
	next(query?: string): DojoNodeList;
	nextAll(query?: string): DojoNodeList;
	odd(): DojoNodeList;

	on(name: string, listener: EventListener): DojoNodeList;
	on(type: DojoExtensionEvent, listener: EventListener): DojoNodeList;

	orphan(filter?: string): DojoNodeList;
	parent(query?: string): DojoNodeList;
	parents(query?: string): DojoNodeList;

	place(query: string, position?: string): DojoNodeList;
	place(node: HTMLElement, position?: string): DojoNodeList;
	place(query: string, position?: number): DojoNodeList;
	place(node: HTMLElement, position?: number): DojoNodeList;

	position(): DojoBorderBox;

	prepend(content: string): DojoNodeList;
	prepend(content: Object): DojoNodeList;
	prepend(content: HTMLElement): DojoNodeList;
	prepend(content: HTMLElement[]): DojoNodeList;
	prepend(content: DojoNodeList): DojoNodeList;
	prepend(content: NodeList): DojoNodeList;

	prependTo(query: string): DojoNodeList;
	prev(query?: string): DojoNodeList;
	prevAll(query?: string): DojoNodeList;
	query(query: string): DojoNodeList;
	remove(filter?: string): DojoNodeList;
	removeAttr(name: string): DojoNodeList;

	removeClass(className?: string): DojoNodeList;
	removeClass(classNames?: string[]): DojoNodeList;
	//removeClassFx(cssClass, args);			// May require dojox.fx
	removeData(key?: string): DojoNodeList;
	replaceAll(query: string): DojoNodeList;

	replaceClass(addClass: string, removeClass?: string): DojoNodeList;
	replaceClass(addClass: string, removeClasses?: string[]): DojoNodeList;
	replaceClass(addClasses: string[], removeClass?: string): DojoNodeList;
	replaceClass(addClasses: string[], removeClasses?: string[]): DojoNodeList;

	replaceWith(content: string): DojoNodeList;
	replaceWith(content: Object): DojoNodeList;
	replaceWith(content: HTMLElement): DojoNodeList;
	replaceWith(content: HTMLElement[]): DojoNodeList;
	replaceWith(content: DojoNodeList): DojoNodeList;
	replaceWith(content: NodeList): DojoNodeList;

	siblings(query?: string): DojoNodeList;
	slice(begin: number, end?: number): DojoNodeList;

	slideTo(args: _DojoSlideAnimationCreateOptions): DojoAnimation;
	slideTo(args: DojoAutoSlideAnimationCreateOptions): DojoNodeList;

	some(callback: (node: HTMLElement, index: number, list: DojoNodeList) => boolean, thisObject?: Object): boolean;
	splice(index: number, howmany?: number, ...items: HTMLElement[]): DojoNodeList;

	style(property: string): string[];
	style(property: string, value: string): DojoNodeList;

	text(): string;
	text(value: string): DojoNodeList;

	toggleClass(className: string, condition?: boolean): DojoNodeList;
	//toggleClassFx(cssClass, force, args);			// May require dojox.fx

	val(): string;
	val(): string[];
	val(value: string): DojoNodeList;
	val(value: string[]): DojoNodeList;

	wipeIn(args: _DojoAnimationCreateOptions): DojoAnimation;
	wipeIn(args: DojoAutoAnimationCreateOptions): DojoNodeList;
	
	wipeOut(args: _DojoAnimationCreateOptions): DojoAnimation;
	wipeOut(args: DojoAutoAnimationCreateOptions): DojoNodeList;

	wrap(html: string): DojoNodeList;
	wrap(node: HTMLElement): DojoNodeList;

	wrapAll(html: string): DojoNodeList;
	wrapAll(node: HTMLElement): DojoNodeList;

	wrapInner(html: string): DojoNodeList;
	wrapInner(node: HTMLElement): DojoNodeList;
}
declare module "dojo/NodeList"
{
	export = DojoNodeList;
}

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	export = DojoNodeList;
}
declare module "dojo/NodeList-dom" { 
	export = DojoNodeList;
}
declare module "dojo/NodeList-fx" {
	export = DojoNodeList;
}
declare module "dojo/NodeList-html" {
	export = DojoNodeList;
}
declare module "dojo/NodeList-manipulate" {
	export = DojoNodeList;
}
declare module "dojo/NodeList-traverse" {
	export = DojoNodeList;
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
	var on: {
		(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): DojoHandle;
		(target: Object, type: string, listener: EventListener, dontFix?: boolean): DojoHandle;
		(target: HTMLElement, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): DojoHandle;
		(target: Object, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): DojoHandle;

		emit(target: Object, type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		emit(target: Object, type: DojoExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		selector(cssSelector: string, event: string, children?: boolean): DojoExtensionEvent;
		selector(cssSelector: string, event: DojoExtensionEvent, children?: boolean): DojoExtensionEvent;

		pausable(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): DojoPausableHandle;
		pausable(target: Object, type: string, listener: EventListener, dontFix?: boolean): DojoPausableHandle;
		pausable(target: HTMLElement, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): DojoPausableHandle;
		pausable(target: Object, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): DojoPausableHandle;

		once(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: Object, type: string, listener: EventListener, dontFix?: boolean): void;
		once(target: HTMLElement, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): void;
		once(target: Object, type: DojoExtensionEvent, listener: EventListener, dontFix?: boolean): void;
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

	export function parse(rootNode?: HTMLElement, options?: _ParseOptions): _DijitWidget[];
	export function scan(root?: HTMLElement, options?: _ParseOptions): DojoPromise<HTMLElement[]>;
	export function instantiate(nodes: HTMLElement[], mixin?: Object, options?: _ParseOptions): _DijitWidget[];
	export function construct(ctor: { (params?: _DijitWidgetCreateOptions): _DijitWidget; }, node: HTMLElement, mixin?: Object, options?: _ParseOptions, scripts?: HTMLElement[], inherited?: Object): _DijitWidget;
}

// dojo/query

declare module "dojo/query"
{
	var query: {
		(selector: string, contextId?: string): DojoNodeList;
		(selector: string, context?: Object): DojoNodeList;

		NodeList: DojoNodeList;
	};

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

// dojo/sniff

declare module "dojo/sniff"
{
	var sniff: _DojoHas;
	export = sniff;
}

// dojo/topic

declare module "dojo/topic" 
{
	export function subscribe(topic: string, listener: GenericFunction): DojoHandle;
	export function publish(topic: string, ...v_args: any[]): void;
}

// dojo/promise/Promise

declare class DojoPromise<T>
{
	constructor();

	always(callbackOrErrback?: (value: any) => void ): DojoPromise<T>;
	cancel(reason: any, strict?: boolean): any;
	isCanceled(): boolean;
	isFulfilled(): boolean;
	isRejected(): boolean;
	isResolved(): boolean;
	otherwise(errback?: (error: any) => void ): DojoPromise<T>;
	then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): DojoPromise<V>;
	trace(): DojoPromise<T>;
	traceRejected(): DojoPromise<T>;
}
declare module "dojo/promise/Promise"
{
	export = DojoPromise;
}

// dojo/promise/all

declare module "dojo/promise/all"
{
	function all<T>(promises: DojoPromise<T>[]): DojoPromise<T[]>;
	function all<T>(promises: { [name: string]: DojoPromise<T>; }): DojoPromise<{ [name: string]: T;}>;
	function all<T>(promises: any): DojoPromise<T>;

	export = all;
}

// dojo/promise/first

declare module "dojo/promise/first"
{
	function first<T>(promises: DojoPromise<T>[]): DojoPromise<T>;
	function first<T>(promises: { [name: string]: DojoPromise<T>; }): DojoPromise<T>;
	function first<T>(promises: any): DojoPromise<T>;

	export = first;
}

// dojo/Stateful

declare class DojoStateful
{
	get (name: string): any;
	set (name: string, value: any): void;
	set (values: { [prop: string]: any; }): void;
	watch(name: string, callback: (prop: string, oldvalue: any, newvalue: any) => void ): { unwatch: () => void; };
}
declare module "dojo/Stateful"
{
	export = DojoStateful;
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
	export function cancel(node: HTMLElement, listener: EventListener): DojoHandle;
	export function enter(node: HTMLElement, listener: EventListener): DojoHandle;
	export function leave(node: HTMLElement, listener: EventListener): DojoHandle;
	export function move(node: HTMLElement, listener: EventListener): DojoHandle;
	export function out(node: HTMLElement, listener: EventListener): DojoHandle;
	export function over(node: HTMLElement, listener: EventListener): DojoHandle;
	export function press(node: HTMLElement, listener: EventListener): DojoHandle;
	export function release(node: HTMLElement, listener: EventListener): DojoHandle;
}

// dojo/uacss

declare module "dojo/uacss"
{
	var uacss: _DojoHas;
	export = uacss;
}

// dojo/when

declare module "dojo/when"
{
	function when<T>(value: T): DojoPromise<T>;
	function when<T, V>(value: T, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): V;
	function when<T>(promise: DojoPromise<T>): DojoPromise<T>;
	function when<T, V>(promise: DojoPromise<T>, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): DojoPromise<V>;

	export = when;
}

// dojo/window

declare module "dojo/window"
{
	export function get(doc: HTMLDocument): Window;
	export function getBox(doc: HTMLDocument): DojoPositionLeftTopWidthHeight;
	export function scrollIntoView(node: HTMLElement, pos?:Object): void;
}

// Widgets

interface _DijitWidgetCreateOptions
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
declare class _DijitWidget extends DojoStateful
{
	constructor(params?: _DijitWidgetCreateOptions, srcNodeRef?: HTMLElement);
	constructor(params?: _DijitWidgetCreateOptions, srcNodeRefId?: string);
}
