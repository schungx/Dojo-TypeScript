/// <reference path="dojo_types.ts"/>

// dojo/ready

interface DojoReady
{
  (priority: number, context: Object, callback: GenericBlankFunction): void;
	(context: Object, callback: GenericBlankFunction): void;
	(callback: GenericBlankFunction): void;
}

// dojo/domReady

interface DojoDomReady
{
	(callback: GenericBlankFunction): void;
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

declare class DojoBaseColor
{
	constructor();
	constructor(colors: any[]);
	constructor(color: string);
	constructor(color: Object);

	a: number;
	r: number;
	g: number;
	b: number;

	named: { [name: string]: number[]; }
}
interface IDojoBaseColor
{
	new (): DojoBaseColor;
	new (colors: any[]): DojoBaseColor;
	new (color: string): DojoBaseColor;
	new (color: Object): DojoBaseColor;
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

interface DojoBaseDeclareConfig
{
	constructor: GenericAction;
	destroy: GenericBlankFunction;
}
interface DojoBaseDeclare
{
	(className: string, superclass: Function, props: DojoBaseDeclareConfig): Function;
	(className: string, superclasses: Function[], props: DojoBaseDeclareConfig): Function;
	(superclass: Function, props: DojoBaseDeclareConfig): Function;
	(superclasses: Function[], props: DojoBaseDeclareConfig): Function;

	safeMixin<T extends Object>(dest: T, source: Object): T;
}

// dojo/_base/fx

interface DojoEasingFunction { (value: number): number; }

declare module "dojo/_base/fx"
{
	export class Animation extends DojoEvented
	{
		constructor(args?: Object);

		duration: number;
		curve: any;
		easing: DojoEasingFunction;
		repeat: number;
		rate: number;
		delay: number;

		play(delay?: number, goToStart?: boolean): Animation;
		pause(): Animation;
		gotoPercent(percent: number, andPlay?: boolean): Animation;
		stop(goToEnd?:boolean): Animation;
		status(): string;
	}

	export class _Line
	{
	}

	export function anim(nodeId: string, properties: Object, duration?: number, easing?: DojoEasingFunction, onEnd?: GenericBlankFunction, delay?: number): Animation;
	export function anim(node: HTMLElement, properties: Object, duration?: number, easing?: DojoEasingFunction, onEnd?: GenericBlankFunction, delay?: number): Animation;

	export interface AnimationBaseOptions {
		node: any;
		duration?: number;
		easing?: DojoEasingFunction;
	}
	export interface AnimationOptions extends AnimationBaseOptions {
		properties: { [style: string]: Object; };
	}

	export function animateProperty(args: AnimationOptions): Animation;
	export function fadeIn(args: AnimationBaseOptions): Animation;
	export function fadeOut(args: AnimationBaseOptions): Animation;
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

declare class DojoAdapterRegistry
{
	constructor(returnWrappers?: boolean);

	pairs: any[];
	returnWrappers: boolean;

	match(...args: Object[]): void;
	register(name: string, check: GenericFunctionReturning<boolean>, wrap: GenericAction, directReturn?: boolean, override?: boolean): void;
	unregister(name: string): boolean;
}
interface IDojoAdapterRegistry
{
	new (returnWrappers?: boolean): DojoAdapterRegistry;
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

interface DojoCookie
{
	(name: string, value?: string, props?: {
		expires?: any;
		path?: string;
		domain?: string;
		secure?: boolean;
	}): void;

	isSupported(): boolean;
}

// dojo/currency

declare module "dojo/currency"
{
	export interface _FormatOptions
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
	//export function regexp(options?: _FormatOptions): number;
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
	export interface _FormatOptions
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
interface IDojoDeferred<T>
{
	new (canceler?: (reason: any) => void ): DojoDeferred<T>;
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

declare module "dojo/dom-geometry"
{
	export interface Point
	{
		x: number;
		y: number;
	}
	export interface WidthHeight
	{
		w: number;
		h: number;
	}
	export interface LeftTopWidthHeight extends WidthHeight
	{
		l: number;
		t: number;
	}
	export interface LeftTopRightBottomWidthHeight extends LeftTopWidthHeight
	{
		r: number;
		b: number;
	}

	export var boxModel: string;

	export function docScroll(doc?: HTMLDocument): { node: HTMLElement; x: number; y: number; };
	export function fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number;
	export function getBorderExtents(node: HTMLElement, computedStyle?: Object): LeftTopRightBottomWidthHeight;
	export function getContentBox(node: HTMLElement, computedStyle?: Object): LeftTopWidthHeight;
	export function getIeDocumentElementOffset(doc?: HTMLDocument): Point;
	export function getMarginBox(node: HTMLElement, computedStyle?: Object): LeftTopWidthHeight;
	export function getMarginExtents(node: HTMLElement, computedStyle?: Object): LeftTopWidthHeight;
	export function getMarginSize(node: HTMLElement, computedStyle?: Object): WidthHeight;
	export function getPadBorderExtents(node: HTMLElement, computedStyle?: Object): LeftTopRightBottomWidthHeight;
	export function getPadExtents(node: HTMLElement, computedStyle?: Object): LeftTopRightBottomWidthHeight;
	export function isBodyLtr(doc?: HTMLDocument): boolean;
	export function normalizeEvent(event: { pageX?: number; pageY?: number; offsetX?: number; offsetY?: number; layerX?: number; layerY?: number; }): void;

	export function position(node: HTMLElement, includeScroll?: boolean): LeftTopWidthHeight;
	export function position(node: string, includeScroll?: boolean): LeftTopWidthHeight;

	export function setContentSize(node: HTMLElement, box: WidthHeight, computedStyle?: Object): void;
	export function setMarginBox(node: HTMLElement, box: WidthHeight, computedStyle?: Object): void;
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
interface IDojoEvented
{
	new (): DojoEvented;
}

// dojo/json

declare module "dojo/json"
{
	export function parse(str: string, secured?: boolean): any;

	export function stringify(obj: any, replacer?: any[], space?: boolean): string;
	export function stringify(obj: any, replacer?: (key: string, value: string) => any, space?: boolean): string;
}

// dojo/on

interface DojoOn
{
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
interface IDojoPromise<T>
{
	new (): DojoPromise<T>;
}

// dojo/promise/all

interface DojoPromiseAll<T>
{
	(promises: DojoPromise<T>[]): DojoPromise<T[]>;
	(promises: { [name: string]: DojoPromise<T>; }): DojoPromise<{ [name: string]: T;}>;
	(promises: any): DojoPromise<T>;
}

// dojo/promise/first

interface DojoPromiseFirst<T>
{
	(promises: DojoPromise<T>[]): DojoPromise<T>;
	(promises: { [name: string]: DojoPromise<T>; }): DojoPromise<T>;
	(promises: any): DojoPromise<T>;
}

// dojo/Stateful

declare class DojoStateful
{
	get (name: string): any;
	set (name: string, value: any): void;
	set (values: { [prop: string]: any; }): void;
	watch(name: string, callback: (prop: string, oldvalue: any, newvalue: any) => void ): { unwatch: () => void; };
}
interface IDojoStateful
{
	new (): DojoStateful;
}
